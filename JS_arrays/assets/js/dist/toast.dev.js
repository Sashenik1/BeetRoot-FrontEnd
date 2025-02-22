"use strict";

var toast = {
  success: function success(str) {
    this.show(str, 'success');
  },
  error: function error(str) {
    this.show(str, 'error');
  },
  warning: function warning(str) {
    this.show(str, 'warning');
  },
  info: function info(str) {
    this.show(str, 'info');
  },
  hide: function hide() {
    document.getElementById('my-toast').remove();
  },
  show: function show(str, type) {
    var _this = this;

    if (document.getElementById('my-toast') !== null) {
      this.hide();
    }

    document.body.insertAdjacentHTML("afterbegin", "<div id=\"my-toast\" class=\"my-toast my-toast-".concat(type, "\">\n    ").concat(str, "\n        </div>"));
    setTimeout(function () {
      return _this.hide();
    }, 5000);
  }
};