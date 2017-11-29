modules = {

    application { resource url: '/js/application.js' }

    core {
        dependsOn 'application'
        defaultBundle 'core'

        resource url: '/js/lib/jquery-1.12.4.js',       disposition: 'head'
        resource url: '/js/lib/angular.js',             disposition: 'head'
    }

    angular {
        dependsOn 'core'
        defaultBundle 'core'

        resource url: '/js/ng-app/app.js'
    }

    book {
        dependsOn 'angular'

        resource url: '/js/ng-app/book/bookService.js'
        resource url: '/js/ng-app/book/bookController.js'
    }
}
