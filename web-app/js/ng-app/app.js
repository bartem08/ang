'use strict';

angular.module('ang', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/books/create', {
                templateUrl : '/views/book/createBookView.html',
                controller  : 'bookController'
            }).when('/books/list', {
                templateUrl : '/views/book/bookListView.html',
                controller  : 'bookController'
            }).when('/book/:id', {
                templateUrl : '/views/book/bookView.html',
                controller  : 'bookController'
            })
        });