(function () {
'use strict';

angular.module('data')
.controller('MainController', MainController);


MainController.$inject = ['MenuDataService', 'items'];
function MainController(MenuDataService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
