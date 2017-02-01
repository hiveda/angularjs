(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'template/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();