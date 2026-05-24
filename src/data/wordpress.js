/**
 * WordPress REST API integration
 * Fetches slider data from education.mgmimplant.com
 */

const WP_API_BASE = "https://education.mgmimplant.com/wp-json/wp/v2";
const SLIDER_CATEGORY_ID = 7;

/**
 * Fetch slider posts from WordPress.
 * Returns an array of slide objects compatible with ImageSlider component:
 *   { image, title, subtitle, link }
 *
 * @param {Object} options
 * @param {number} options.perPage - Number of slides to fetch (default: 20)
 * @returns {Promise<Array>} Array of slide data objects
 */
export async function fetchSliderPosts({ perPage = 20 } = {}) {
  const url = new URL(`${WP_API_BASE}/posts`);
  url.searchParams.set("categories", SLIDER_CATEGORY_ID);
  url.searchParams.set("_embed", "wp:featuredmedia");
  url.searchParams.set("per_page", perPage);
  url.searchParams.set("orderby", "date");
  url.searchParams.set("order", "asc");

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
  }

  const posts = await response.json();

  return posts
    .map((post) => {
      // Extract featured image URL from embedded media
      const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
      const imageUrl =
        featuredMedia?.media_details?.sizes?.large?.source_url ||
        featuredMedia?.source_url ||
        null;

      if (!imageUrl) return null; // Skip posts without a featured image

      // Extract subtitle from excerpt (strip HTML tags) or content
      const rawExcerpt = post.excerpt?.rendered || post.content?.rendered || "";
      const subtitle = rawExcerpt.replace(/<[^>]*>/g, "").trim();

      // Decode HTML entities in title
      const title = decodeHTMLEntities(post.title?.rendered || "");

      return {
        image: imageUrl,
        title,
        subtitle: subtitle || title,
        link: post.link || "#",
      };
    })
    .filter(Boolean);
}

/**
 * Decode common HTML entities (WordPress encodes these in titles)
 */
function decodeHTMLEntities(text) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}
