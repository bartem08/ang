angular.module('ang')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('bookCreate', {
                url          : '/book/create',
                templateUrl  : '/templates/book/create-book.tmpl.html',
                controller   : 'createBookController',
                controllerAs : 'createBookCtrl'
            })
            .state('bookList', {
                url          : '/book/list',
                templateUrl  : '/templates/book/book-list.tmpl.html',
                controller   : 'bookController',
                controllerAs : 'bookCtrl'
            })
            .state('bookDetails', {
                url          : '/book/:id',
                templateUrl  : '/templates/book/book.tmpl.html',
                controller   : 'bookDetailsController',
                controllerAs : 'bookDetailsCtrl'
            });
            $urlRouterProvider.otherwise('/');
    });