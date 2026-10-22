(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const filters = document.querySelectorAll('.filter');
  const works = document.querySelectorAll('.work-card');
  const navLinks = document.querySelectorAll('.nav-link');

  const getPreferredTheme = () => {
    try {
      const saved = localStorage.getItem('lena-portfolio-theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) { /* Cookies or local storage may be disabled. */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    themeButton?.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    themeButton?.setAttribute('aria-pressed', String(theme === 'dark'));
  };
  applyTheme(getPreferredTheme());
  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('lena-portfolio-theme', next); } catch (e) { /* Ignore. */ }
  });

  function setMenu(open) {
    sidebar.classList.toggle('sidebar-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', open);
  }
  menuButton?.addEventListener('click', () => setMenu(!sidebar.classList.contains('sidebar-open')));
  navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('sidebar-open') && !sidebar.contains(e.target) && !menuButton.contains(e.target)) setMenu(false);
  });

  filters.forEach((button) => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    let matches = 0;
    works.forEach((work) => {
      const visible = category === 'all' || work.dataset.topics.split(' ').includes(category);
      work.hidden = !visible;
      if (visible) matches++;
    });
    document.getElementById('filter-empty').hidden = matches > 0;
  }));

  if ('IntersectionObserver' in window) {
    const sections = [...document.querySelectorAll('main section[id]')].filter(s => [...navLinks].some(l => l.getAttribute('href') === '#' + s.id));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navLinks.forEach((link) => {
          const current = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', current);
          if (current) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-12% 0px -72% 0px' });
    sections.forEach(s => observer.observe(s));
  }
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = new Date().getFullYear();
})();
