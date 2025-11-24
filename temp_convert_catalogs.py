import os
from PIL import Image
import sys

# Source and destination directories
source_dir = "D:/Work/MGM-Website/MGM-Assets/Catalogs"
dest_dir = "D:/Work/MGM-Website/MGM-Assets/Catalogs-Converted"

# Create destination directory if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# Get all image files
files = [f for f in os.listdir(source_dir) if f.endswith(('.tif', '.jpg'))]
files.sort()

print(f"Found {len(files)} catalog files")

# Convert each file to a smaller JPG
for idx, filename in enumerate(files, 1):
    try:
        source_path = os.path.join(source_dir, filename)
        base_name = os.path.splitext(filename)[0]
        dest_path = os.path.join(dest_dir, f"{base_name}.jpg")

        # Skip if already converted
        if os.path.exists(dest_path):
            print(f"[{idx}/{len(files)}] Already converted: {filename}")
            continue

        print(f"[{idx}/{len(files)}] Converting: {filename}")

        # Open and convert image
        with Image.open(source_path) as img:
            # Convert to RGB if necessary
            if img.mode != 'RGB':
                img = img.convert('RGB')

            # Resize to max 2000px width while maintaining aspect ratio
            max_width = 2000
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

            # Save as JPG with quality 85
            img.save(dest_path, 'JPEG', quality=85, optimize=True)

        print(f"    Saved to: {dest_path}")

    except Exception as e:
        print(f"    ERROR: {e}")

print("\nConversion complete!")
