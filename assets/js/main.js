(function () {
  const searchInput = document.getElementById('search-input');
  const tagList = document.getElementById('tag-list');
  const list = document.getElementById('pub-list');
  const noResults = document.getElementById('no-results');
  if (!list) return;

  /** @type {HTMLLIElement[]} */
  const items = Array.from(list.querySelectorAll('.pub-item'));
  let selectedTag = null;

  function normalize(text) {
    return (text || '').toString().toLowerCase();
  }

  function applyFilters() {
    const q = normalize(searchInput ? searchInput.value : '');
    let visible = 0;
    for (const el of items) {
      const title = normalize(el.dataset.title);
      const tags = normalize(el.dataset.tags);
      const matchesText = !q || title.includes(q) || tags.includes(q);
      const matchesTag = !selectedTag || tags.split(',').includes(selectedTag);
      const show = matchesText && matchesTag;
      el.style.display = show ? '' : 'none';
      if (show) visible++;
    }
    if (noResults) noResults.hidden = visible !== 0;
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  if (tagList) {
    tagList.addEventListener('click', (e) => {
      const btn = e.target.closest('.tag-chip');
      if (!btn) return;
      const tag = normalize(btn.dataset.tag);
      if (selectedTag === tag) {
        selectedTag = null;
        btn.classList.remove('active');
      } else {
        selectedTag = tag;
        // Toggle active state
        tagList.querySelectorAll('.tag-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      // Update hash for quick linking
      if (selectedTag) {
        location.hash = `tag-${selectedTag}`;
      } else if (location.hash.startsWith('#tag-')) {
        history.replaceState(null, '', location.pathname + location.search);
      }
      applyFilters();
    });
  }

  // Allow clicking inline tags inside list items to filter
  list.addEventListener('click', (e) => {
    const chip = e.target.closest('.tag-chip.small');
    if (!chip) return;
    const tag = normalize(chip.dataset.tag);
    const btn = tagList ? tagList.querySelector(`[data-tag="${CSS.escape(chip.dataset.tag)}"]`) : null;
    if (btn) btn.click();
    e.preventDefault();
  });

  // If URL has #tag-foo, preselect it
  if (location.hash.startsWith('#tag-')) {
    const tag = normalize(location.hash.replace('#tag-', ''));
    const btn = tagList ? tagList.querySelector(`[data-tag="${CSS.escape(tag)}"]`) : null;
    if (btn) btn.click();
  } else {
    applyFilters();
  }
})();


