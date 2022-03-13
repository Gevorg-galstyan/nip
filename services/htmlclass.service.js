const HtmlClass = {
  init() {
    // init base layout
    this.initLayout();

    // init header and subheader menu
    this.initHeader();

    // init aside and aside menu
    this.initAside();

    // init themes
    this.initThemes();
  },

  /**
   * Init Layout
   */
  initLayout() {
    // Offcanvas directions
    ['quick-panel-right', 'demo-panel-right', 'offcanvas-right'].forEach(item => {
      document.body.classList.add(item);
    });

    // Properly close mobile header menu
    document.body.classList.remove('header-menu-wrapper-on');
  },

  /**
   * Init Header
   */
  initHeader() {
    document.body.classList.add('header-fixed');
    document.body.classList.add('header-mobile-fixed');
  },

  /**
   * Init Aside
   */
  initAside() {
    // Reset aside class in body
    ['aside-enabled', 'aside-fixed', 'aside-static', 'aside-minimize'].forEach(item => {
      document.body.classList.remove('header-menu-wrapper-on');
    });

    // Add aside class enabled in body
    document.body.classList.add('aside-enabled');

    // Fixed Aside
    document.body.classList.add('aside-fixed');
  },

  /**
   * Import theme SCSS file based on the selected theme
   */
  initThemes() {
    import(`@/assets/sass/themes/layout/header/base/light.scss`);
    import(`@/assets/sass/themes/layout/header/menu/light.scss`);
    import(`@/assets/sass/themes/layout/aside/dark.scss`);
    import(`@/assets/sass/themes/layout/brand/dark.scss`);
  },
};

export default HtmlClass;
