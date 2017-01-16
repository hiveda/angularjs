(function () {
'use strict';

var itemlist = [
  { name: "cookies", quantity: 10 },
  { name: "chips", quantity: 5 },
  { name: "bars", quantity: 2 },
  { name: "brownies", quantity: 3 },
  { name: "x", quantity: 1 },
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyCtrlr)
.controller('AlreadyBoughtController', BoughtCtrlr)
.service('ShoppingListCheckOffService', ShoppingService);

// 1st controller : ToBuyCtrlr
ToBuyCtrlr.$inject = ['ShoppingListCheckOffService'];
function ToBuyCtrlr(ShoppingService) {
  this.items = ShoppingService.getItems(); // controller items array is now linked to service array !!

  this.remove = function (itemIdex) {
    ShoppingService.removeItem(itemIdex);
  };
}

// 2nd controller : BoughtCtrlr
BoughtCtrlr.$inject = ['ShoppingListCheckOffService'];
function BoughtCtrlr(ShoppingService) {
  this.items = ShoppingService.getBoughtItems();
}

// service
function ShoppingService() {
  // List of shopping items to buy
  var itemsToBuy = itemlist;
  // List of items bought
  var itemsBought = [];

  this.removeItem = function (itemIdex) {
    itemsBought.push(itemsToBuy[itemIdex]); // move item to bought array
    itemsToBuy.splice(itemIdex, 1); // remove item from "to buy"" array
  };

  this.getItems = function () {
    // returns reference to itemsBought array in service => changes to this array will be reflected in controller
    return itemsToBuy;
  };

  this.getBoughtItems = function () {
    // returns reference to itemsBought array in service => changes to this array will be reflected in controller
    return itemsBought; 
  };
}


})();
