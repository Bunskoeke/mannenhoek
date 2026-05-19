// ============================================================
// BLOG-RENDERER.JS — Laadt blogs dynamisch vanuit BLOGS_DATA
// ============================================================

function renderBlogGrid(containerId, options) {
  var cfg = Object.assign({ limit: 100, featuredFirst: true, category: null }, options);
  var container = document.getElementById(containerId);
  if (!container) return;

  var blogs = (typeof BLOGS_DATA !== 'undefined' ? BLOGS_DATA : []).slice();

  if (cfg.category) {
    blogs = blogs.filter(function(b) { return b.category === cfg.category; });
  }

  blogs.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
  blogs = blogs.slice(0, cfg.limit);

  if (!blogs.length) {
    container.innerHTML = '<p style="color:var(--gray-1);grid-column:1/-1;padding:40px 0;font-size:1rem;">Nieuwe artikelen komen snel online. Kom binnenkort terug!</p>';
    return;
  }

  container.innerHTML = blogs.map(function(blog, i) {
    return blogCardHTML(blog, cfg.featuredFirst && i === 0);
  }).join('');
}

function updateCategoryCounts() {
  ['sporten','lifestyle','relatie','carriere','tech','koken','overig'].forEach(function(cat) {
    var el = document.getElementById('cat-count-' + cat);
    if (el) {
      var n = (typeof BLOGS_DATA !== 'undefined' ? BLOGS_DATA : []).filter(function(b) { return b.category === cat; }).length;
      el.textContent = n + (n === 1 ? ' artikel' : ' artikelen');
    }
  });
}

function blogCardHTML(blog, featured) {
  var p = (window.BLOG_PATH_PREFIX !== undefined) ? window.BLOG_PATH_PREFIX : '';
  var e = function(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };
  return '<article class="post-card' + (featured ? ' post-card--featured' : '') + '">' +
    '<a href="' + p + 'blog/' + e(blog.slug) + '">' +
      '<img class="post-card__img" src="' + e(blog.image) + '" alt="' + e(blog.title) + '" loading="lazy">' +
      '<div class="post-card__body">' +
        '<p class="post-card__cat">' + e(blog.categoryLabel) + '</p>' +
        '<h3 class="post-card__title">' + e(blog.title) + '</h3>' +
        '<p class="post-card__excerpt">' + e(blog.excerpt) + '</p>' +
        '<div class="post-card__meta">' +
          '<span>' + e(blog.dateFormatted) + '</span>' +
          '<span>' + e(blog.readTime) + '</span>' +
        '</div>' +
      '</div>' +
    '</a>' +
  '</article>';
}
