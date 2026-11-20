/**
 * WordPress REST API integration
 * Fetches public posts from education.mgmimplant.com
 */

const WP_API_BASE = "https://education.mgmimplant.com/wp-json/wp/v2";
const NEWS_CATEGORY_ID = 6;
const SLIDER_CATEGORY_ID = 7;

async function requestPosts(category, params) {
  const url = new URL(`${WP_API_BASE}/posts`);
  url.search = new URLSearchParams({
    categories: category,
    _embed: "wp:featuredmedia",
    ...params,
  });
  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
  }

  return response;
}

function featuredMedia(post) {
  return post._embedded?.["wp:featuredmedia"]?.[0];
}

function featuredImage(media) {
  return (
    media?.source_url ||
    media?.media_details?.sizes?.full?.source_url ||
    media?.media_details?.sizes?.large?.source_url ||
    null
  );
}

function toNewsPost(post) {
  const media = featuredMedia(post);
  const image = featuredImage(media);

  return {
    id: post.id,
    title: decodeHTMLEntities(post.title?.rendered || "") || "Untitled post",
    excerpt: post.excerpt?.rendered || "",
    content: post.content?.rendered || "",
    date: post.date,
    image: image?.startsWith("https://") ? image : null,
    imageAlt: media?.alt_text || "",
  };
}

export async function fetchNewsPosts(page) {
  const response = await requestPosts(NEWS_CATEGORY_ID, {
    page,
    per_page: 12,
    _fields: "id,title,excerpt,date,_links,_embedded",
  });
  const posts = await response.json();

  return {
    posts: posts.map(toNewsPost),
    hasMore: page < Number(response.headers.get("X-WP-TotalPages")),
  };
}

export async function fetchNewsPost(id) {
  const response = await requestPosts(NEWS_CATEGORY_ID, {
    include: id,
    _fields: "id,title,content,date,_links,_embedded",
  });
  const [post] = await response.json();
  return String(post?.id) === id ? toNewsPost(post) : null;
}

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
  const response = await requestPosts(SLIDER_CATEGORY_ID, {
    per_page: perPage,
    orderby: "date",
    order: "asc",
  });
  const posts = await response.json();

  return posts
    .map((post) => {
      // Extract featured image URL — prefer full-size so the image isn't cropped
      const imageUrl = featuredImage(featuredMedia(post));

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
