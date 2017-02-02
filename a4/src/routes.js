(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'template/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    //templateUrl: 'template/categories.template.html',
    template: '<categories items="ctrl.items"></categories>',
    controller: 'CategoriesController as ctrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        console.log("MenuDataService.getAllCategories");
        var lst = MenuDataService.getAllCategories();
        console.log(lst);
        return lst;
      }]
    }
  })

  .state('items', {
    url: '/items',
    templateUrl: 'template/main-shoppinglist.template.html',
    controller: 'MainController as ctrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItems();
      }]
    }
  })


//   .state('mainList.itemDetail', {
//     url: '/item-detail/{itemId}',
//     templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
//     controller: "ItemDetailController as itemDetail"
//   });

}

})();
