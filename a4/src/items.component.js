(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'template/items.template.html',
  bindings: {
    items: '<'
  }
});

})();