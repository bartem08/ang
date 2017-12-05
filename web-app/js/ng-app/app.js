'use strict';

angular.module('ang', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/book/create', {
                templateUrl : '/templates/book/createBookView.html',
                controller  : 'createBookController'
            })
            .when('/book/list', {
                templateUrl : '/templates/book/bookListView.html',
                controller  : 'bookController'
            })
            .when('/book/:id', {
                templateUrl : '/templates/book/bookView.html',
                controller  : 'bookDetailsController'
            })
        });