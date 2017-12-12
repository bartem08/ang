angular.module('ang')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/book/create', {
                templateUrl : '/templates/book/create-book.tmpl.html',
                controller  : 'CreateBookController as createBookCtrl'
            })
            .when('/book/list', {
                templateUrl : '/templates/book/book-list.tmpl.html',
                controller  : 'BookController as bookCtrl'
            })
            .when('/book/:id', {
                templateUrl : '/templates/book/book.tmpl.html',
                controller  : 'BookDetailsController as bookDetailsCtrl'
            })
            .otherwise('/');
    });