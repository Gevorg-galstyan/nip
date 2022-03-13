'use strict';

var KTLayoutHeaderTopbar = (function () {
  // Private properties
  var _toggleElement;
  var _toggleObject;

  // Private functions
  var _init = function () {
    _toggleObject = new KTToggle(_toggleElement, KTUtil.getBody(), {
      targetState: 'topbar-mobile-on',
      toggleState: 'active',
    });
  };

  // Public methods
  return {
    init(id) {
      _toggleElement = KTUtil.getById(id);

      if (!_toggleElement) {
        return;
      }

      // Initialize
      _init();
    },

    getToggleElement() {
      return _toggleElement;
    },
  };
})();

export default KTLayoutHeaderTopbar;
