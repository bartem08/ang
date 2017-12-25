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
            })
            .state('dataSourceList', {
                url          : '/dataSources',
                templateUrl  : '/templates/datasource/datasource.tmpl.html',
                controller   : 'dataSource',
                controllerAs : 'dataSourceCtrl'
            })
            .state('dataSourceCreate', {
                url          : '/dataSources/create',
                templateUrl  : '/templates/datasource/datasource-create.tmpl.html',
                controller   : 'dataSourceCreate',
                controllerAs : 'dataSourceCreateCtrl'
            })
            .state('dataSourceDelete', {
                url          : '/dataSources/delete',
                templateUrl  : '/templates/datasource/datasource-delete.tmpl.html',
                controller   : 'dataSourceDelete',
                controllerAs : 'dataSourceDeleteCtrl'
            });
            $urlRouterProvider.otherwise('/');
    });