(function () {
'use strict';

angular.module('data')
.component('shoppingList', {
  templateUrl: 'template/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
