"""
Render STL files to 800x800 WebP images using PyVista.
"""

import os
import re
from pathlib import Path
import pyvista as pv
from PIL import Image
import numpy as np
import io

# Configure PyVista for off-screen rendering
pv.OFF_SCREEN = True

# Paths
INPUT_DIR = Path(r"D:\Work\MGM-Website\MGM-Assets\3d Models Parts\Cleaned")
OUTPUT_DIR = Path(r"D:\Work\MGM-Website\public\assets\images\3d-parts")

# Ensure output directory exists
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def sanitize_filename(name: str) -> str:
    """Convert filename to a clean, web-friendly format."""
    # Remove extension
    name = Path(name).stem
    # Replace Turkish characters
    tr_map = {
        "ı": "i",
        "İ": "I",
        "ğ": "g",
        "Ğ": "G",
        "ü": "u",
        "Ü": "U",
        "ş": "s",
        "Ş": "S",
        "ö": "o",
        "Ö": "O",
        "ç": "c",
        "Ç": "C",
    }
    for tr_char, en_char in tr_map.items():
        name = name.replace(tr_char, en_char)
    # Replace spaces and special chars with hyphens
    name = re.sub(r"[^\w\-]", "-", name)
    # Remove multiple consecutive hyphens
    name = re.sub(r"-+", "-", name)
    # Remove leading/trailing hyphens
    name = name.strip("-")
    # Convert to lowercase
    return name.lower()


def render_stl_to_image(
    stl_path: Path, output_path: Path, material: str = "gold", size: int = 800
):
    """Render an STL file to a WebP image with transparent background."""
    try:
        # Load the STL mesh
        mesh = pv.read(str(stl_path))

        # Create plotter with specific window size
        plotter = pv.Plotter(off_screen=True, window_size=[size, size])

        # Set transparent background
        plotter.set_background("white", top="white")

        # Material Settings
        if material == "blue":
            mesh_color = "#007FFF"  # Azure Radiance / Metallic Blue
            # Cooler lighting for blue
            light_config = [
                {"pos": (2, 2, 3), "color": "white", "intensity": 1.0},
                {
                    "pos": (-2, -1, 2),
                    "color": "#E6E6FA",
                    "intensity": 0.5,
                },  # Lavender fill
                {"pos": (0, -3, 1), "color": "white", "intensity": 0.3},
            ]
        else:  # Gold (default)
            mesh_color = "#FFD700"  # Gold (Brighter)
            # Warm lighting for gold - enhanced for high reflectivity
            light_config = [
                {
                    "pos": (2, 2, 3),
                    "color": "#FFF8E7",
                    "intensity": 1.2,
                },  # Cosmic Latte (Bright warm)
                {
                    "pos": (-2, -1, 2),
                    "color": "#FFDAB9",
                    "intensity": 0.6,
                },  # Peach Puff (Warm fill)
                {"pos": (0, -3, 1), "color": "white", "intensity": 0.4},  # Rim light
                {
                    "pos": (0, 5, 5),
                    "color": "#FFFFF0",
                    "intensity": 0.8,
                },  # Top-down shine
            ]

        # Add mesh with metallic appearance
        # Use split_sharp_edges to preserve sharp edges while smoothing faces
        mesh_smooth = mesh.compute_normals(
            cell_normals=True,
            point_normals=True,
            split_vertices=True,
            flip_normals=False,
            consistent_normals=True,
            feature_angle=30.0,  # Preserve edges sharper than 30 degrees
        )

        plotter.add_mesh(
            mesh_smooth,
            color=mesh_color,
            specular=1.0,  # High specular for metallic shine
            specular_power=120,  # Very tight specular highlights (very shiny)
            smooth_shading=True,  # Smooth shading on faces
            ambient=0.1,  # Low ambient to emphasize reflections
            diffuse=0.4,  # Lower diffuse for metallic look
            metallic=True,  # Enable metallic rendering
            roughness=0.05,  # Very low roughness for polished/mirror-like look
        )

        # Set up camera - isometric-like view
        plotter.camera_position = "iso"
        plotter.reset_camera()

        # Zoom with padding (smaller zoom = more padding around object)
        plotter.camera.zoom(1.0)

        # Remove default lights and add custom lighting
        plotter.remove_all_lights()

        for light in light_config:
            plotter.add_light(
                pv.Light(
                    position=light["pos"],
                    focal_point=(0, 0, 0),
                    color=light["color"],
                    intensity=light["intensity"],
                )
            )

        # Render to image with a unique background color for chroma keying
        # Use magenta as it's unlikely to appear in gold or blue metallic renders
        plotter.set_background("#FF00FF")
        img = plotter.screenshot(transparent_background=False, return_img=True)
        plotter.close()

        # Convert to PIL Image
        pil_image = Image.fromarray(img)

        # Convert to RGBA and make magenta background transparent
        pil_image = pil_image.convert("RGBA")
        data = np.array(pil_image, dtype=np.float32)

        # Calculate "magenta-ness" - how close each pixel is to pure magenta
        # Pure magenta is (255, 0, 255), so we check high R, low G, high B
        r, g, b = data[:, :, 0], data[:, :, 1], data[:, :, 2]

        # Magenta has high red, low green, high blue
        # Calculate a score: high when R and B are high, G is low
        magenta_score = (r / 255) * (1 - g / 255) * (b / 255)

        # Threshold for what counts as "magenta enough" to be transparent
        # Use a gradient for anti-aliased edges
        threshold = 0.5

        # Calculate alpha: fully transparent where magenta_score is high
        # For edge pixels (anti-aliased), calculate partial transparency
        alpha = np.where(
            magenta_score > threshold,
            0,  # Fully transparent for clear magenta
            np.clip((1 - magenta_score / threshold) * 255, 0, 255),
        )

        # For pixels that are partially magenta (the fringe), also remove the magenta tint
        # by shifting the color towards the object color
        fringe_mask = (magenta_score > 0.1) & (magenta_score <= threshold)

        # Calculate blend factor for entire image (same shape as fringe_mask)
        blend_full = np.clip(magenta_score / threshold, 0, 1)

        # Apply color correction only where fringe_mask is True
        data[:, :, 0] = np.where(fringe_mask, r * (1 - blend_full * 0.5), r)
        data[:, :, 2] = np.where(fringe_mask, b * (1 - blend_full * 0.5), b)

        data[:, :, 3] = alpha

        # Convert back to uint8
        data = np.clip(data, 0, 255).astype(np.uint8)

        # Create new image with transparency
        pil_image = Image.fromarray(data)
        pil_image.save(str(output_path), "WEBP", quality=90, lossless=False)

        return True
    except Exception as e:
        print(f"Error rendering {stl_path.name}: {e}")
        return False


def safe_print(msg: str):
    """Print message, replacing non-ASCII chars for console compatibility."""
    try:
        print(msg)
    except UnicodeEncodeError:
        print(msg.encode("ascii", "replace").decode("ascii"))


def main():
    # Get all STL files
    stl_files = list(INPUT_DIR.glob("*.stl")) + list(INPUT_DIR.glob("*.STL"))

    # Remove duplicates (case-insensitive)
    seen = set()
    unique_files = []
    for f in stl_files:
        lower_name = f.name.lower()
        if lower_name not in seen:
            seen.add(lower_name)
            unique_files.append(f)

    print(f"Found {len(unique_files)} unique STL files")

    success_count = 0
    failed_files = []

    for i, stl_file in enumerate(unique_files, 1):
        # Generate output filename
        clean_name = sanitize_filename(stl_file.name)

        # Render Gold
        output_path_gold = OUTPUT_DIR / f"{clean_name}_gold.webp"
        safe_print(f"[{i}/{len(unique_files)}] Rendering Gold: {clean_name}_gold.webp")
        gold_success = render_stl_to_image(stl_file, output_path_gold, material="gold")

        # Render Blue
        output_path_blue = OUTPUT_DIR / f"{clean_name}_blue.webp"
        safe_print(f"[{i}/{len(unique_files)}] Rendering Blue: {clean_name}_blue.webp")
        blue_success = render_stl_to_image(stl_file, output_path_blue, material="blue")

        if gold_success and blue_success:
            success_count += 1
        else:
            failed_files.append(stl_file.name)

    print(f"\n{'='*60}")
    print(
        f"Completed: {success_count}/{len(unique_files)} files rendered successfully (both gold and blue)"
    )

    if failed_files:
        print(f"\nFailed files:")
        for f in failed_files:
            print(f"  - {f}")

    print(f"\nOutput directory: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
