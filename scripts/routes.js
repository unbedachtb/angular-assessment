angular.module('assessment').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "./views/home.html",
    })
    .state('about', {
      url: "/about",
      templateUrl: "./views/about.html",
    })
    .state('blog', {
      url: "/blog",
      templateUrl: "./views/blog.html",
    })
    .state('shop', {
      url: "/shop",
      templateUrl: "./views/shop.html",
    })
    .state('products', {
      url: './mainCtrl/:id',
      templateUrl: './views/product-details.html',
      controller: 'mainCtrl'
    });
    $urlRouterProvider
      .otherwise('/');
});
