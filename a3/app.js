(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', Ctrlr)
.service('MenuSearchService', SearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    // templateUrl: 'items.html',
    template: '<ul><li ng-repeat="x in ctrl.found">{{ x.short_name }} : {{ x.name }} | {{ x.description }}  <button ng-click="ctrl.removeItem($index);">Dont want this one!</button></li></ul>',
    scope: {
      ctrl: '=myCtrl',
      items: '<',
      onRemove: '&'
    },
  };

  return ddo;
}

// controller : ToBuyCtrlr
Ctrlr.$inject = ['MenuSearchService'];
function Ctrlr(SearchService) {
  var c = this;
  // var promise = SearchService.getMenuCategories();

  // promise.then(function (response) {
  //   c.categories = response.data;
  // })
  
  this.getItems = function (searchTerm){
      c.found = [];
      if (searchTerm.trim().length > 0)
      {
        var promise = SearchService.getMatchedMenuItems(searchTerm);
        promise.then(function (response) {
          // don't use "this"" => refers not to ctlr function !!!
          //this.found = response.data;
          c.found = response;
        })
      }
  }

  this.removeItem = function (itemIndex) {
    console.log(itemIndex);
    c.found.splice(itemIndex, 1);
  };
}

// service
SearchService.$inject = ['$http'];
function SearchService($http) {
  //
  this.getMatchedMenuItems = function (searchTerm){
    console.log(searchTerm);
    
    var res = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
    // return res;

    return res.then(function (result) {
        // process result and only keep items that match
        var foundItems = [];
        console.log(result.data.menu_items.length);
        var i = 0;
        for (i = 0; i < result.data.menu_items.length; i++)
        {
          // console.log(i + ": " + result.data.menu_items[i].description);
          // if (result.data.menu_items[i] !== undefined)
          if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) >= 0)
          {
             foundItems.push(result.data.menu_items[i]); 
             console.log(foundItems.length + ", i=" + i);
          }
        }
        console.log(foundItems.length);
        // return processed items
        return foundItems;
    });
  }
}


})();
