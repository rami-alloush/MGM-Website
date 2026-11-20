import DOMPurify from "dompurify";
import { fetchNewsPost, fetchNewsPosts } from "../../data/wordpress.js";
import { createElement } from "../utils.js";

const pageClass = "min-h-screen bg-white/95 px-6 py-16 md:px-8";
const headingClass = "font-heading text-4xl font-bold text-secondary md:text-5xl";
const buttonClass =
  "rounded-lg border border-primary px-5 py-2 font-semibold text-primary hover:bg-primary hover:text-white disabled:opacity-50";
const dateFormat = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeZone: "UTC",
});

function postDate(date) {
  const day = date?.slice(0, 10);
  const parsed = new Date(day);
  const time = createElement("time", "block text-sm text-charcoal");
  if (Number.isFinite(parsed.getTime())) {
    time.dateTime = day;
    time.textContent = dateFormat.format(parsed);
  }
  return time;
}

function postImage(post, className) {
  const image = createElement("img", className);
  image.alt = post.imageAlt;
  image.src = post.image;
  return image;
}

function newsCard(post) {
  const article = createElement(
    "article",
    "overflow-hidden rounded-xl border border-silver bg-white shadow-sm",
  );

  if (post.image) {
    const image = postImage(post, "aspect-video w-full bg-gray-50 object-contain");
    image.loading = "lazy";
    article.append(image);
  }

  const body = createElement("div", "space-y-3 p-6");
  const heading = createElement("h2", "font-heading text-xl font-bold text-secondary");
  const link = createElement("a", "hover:text-primary hover:underline", post.title);
  link.href = `#/education/${post.id}`;
  heading.append(link);
  body.append(postDate(post.date), heading);

  const excerpt = DOMPurify.sanitize(post.excerpt, {
    ALLOWED_TAGS: [],
    RETURN_DOM_FRAGMENT: true,
  }).textContent.trim();
  if (excerpt) body.append(createElement("p", "text-charcoal", excerpt));

  article.append(body);
  return article;
}

export const NewsPage = () => {
  const section = createElement("section", pageClass);
  const container = createElement("div", "mx-auto max-w-7xl space-y-8");
  const heading = createElement("h1", headingClass, "News & Education");
  const grid = createElement("div", "grid gap-6 md:grid-cols-2 lg:grid-cols-3");
  const status = createElement("p", "text-charcoal");
  status.setAttribute("role", "status");
  const more = createElement("button", buttonClass, "Load more posts");
  more.type = "button";
  more.hidden = true;
  container.append(heading, grid, status, more);
  section.append(container);

  let page = 1;

  async function loadPosts() {
    const triggeredByButton = document.activeElement === more;
    status.textContent = "Loading news…";
    more.disabled = true;
    try {
      const { posts, hasMore } = await fetchNewsPosts(page);
      const cards = posts.map(newsCard);
      grid.append(...cards);
      status.textContent = page === 1 && !posts.length ? "No news posts yet." : "";
      if (triggeredByButton && document.activeElement === document.body) {
        cards[0]?.querySelector("a").focus();
      }
      more.hidden = !hasMore;
      more.textContent = "Load more posts";
      page += 1;
    } catch {
      status.textContent = "News could not be loaded.";
      more.hidden = false;
      more.textContent = "Try again";
    } finally {
      more.disabled = false;
    }
  }

  more.addEventListener("click", loadPosts);
  loadPosts();
  return section;
};

export const NewsArticlePage = (id) => {
  const section = createElement("section", pageClass);
  const container = createElement("div", "mx-auto max-w-3xl space-y-6");
  const back = createElement(
    "a",
    "inline-block font-semibold text-primary hover:underline",
    "← All news",
  );
  back.href = "#/education";
  const status = createElement("p", "text-charcoal", "Loading article…");
  status.setAttribute("role", "status");
  const article = createElement("article", "space-y-6");
  container.append(back, status, article);
  section.append(container);

  fetchNewsPost(id)
    .then((post) => {
      if (!post) {
        status.textContent = "This article is unavailable.";
        return;
      }

      article.append(createElement("h1", headingClass, post.title), postDate(post.date));
      if (post.image) {
        article.append(postImage(post, "max-h-[36rem] w-full rounded-xl object-contain"));
      }

      const content = createElement("div", "news-article space-y-4 text-lg text-charcoal");
      content.append(
        DOMPurify.sanitize(post.content, {
          FORBID_TAGS: ["form", "input", "button", "select", "textarea", "style"],
          FORBID_ATTR: ["id", "name", "style", "class"],
          USE_PROFILES: { html: true },
          RETURN_DOM_FRAGMENT: true,
        }),
      );
      article.append(content);
      status.hidden = true;
    })
    .catch(() => {
      status.textContent = "The article could not be loaded.";
    });

  return section;
};
