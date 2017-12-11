modules = {

    application { resource url: '/js/application.js' }

    core {
        dependsOn 'application'
        defaultBundle 'core'

        resource url: '/js/lib/angular.js', disposition: 'head'
        resource url: '/js/lib/angular-cookies.js'
        resource url: '/js/lib/angular-route.js'
    }

    angular {
        dependsOn 'core'
        defaultBundle 'core'

        resource url: '/js/ng-app/app.js'
    }

    bootstrap {
        defaultBundle 'bootstrap'

        resource url: '/js/lib/jquery.min.js', disposition: 'head'
        resource url: '/bootstrap-sb2-admin/css/bootstrap/bootstrap.min.css', disposition: 'head'
        resource url: '/bootstrap-sb2-admin/css/fonts/font-awesome.min.css', disposition: 'head'
        resource url: '/bootstrap-sb2-admin/css/metisMenu/metisMenu.min.css', disposition: 'head'
        resource url: '/bootstrap-sb2-admin/css/sb2-admin/sb-admin-2.css', disposition: 'head'
        resource url: '/bootstrap-sb2-admin/css/morris/morris.css', disposition: 'head'

        resource url: '/bootstrap-sb2-admin/js/bootstrap/bootstrap.min.js'
        resource url: '/bootstrap-sb2-admin/js/morris/morris.min.js'
        resource url: '/bootstrap-sb2-admin/js/metisMenu/metisMenu.min.js'
        resource url: '/bootstrap-sb2-admin/js/sb2-admin/sb-admin-2.js'
    }

    book {
        dependsOn 'angular'

        resource url: '/js/ng-app/book/bookService.js'
        resource url: '/js/ng-app/book/bookController.js'
        resource url: '/js/ng-app/book/createBookController.js'
        resource url: '/js/ng-app/book/bookDetailsController.js'
        resource url: '/js/ng-app/validators/pastValidator.js'
        resource url: '/js/ng-app/book/centuryFilter.js'
    }

    author {
        dependsOn 'angular'

        resource url: '/js/ng-app/author/authorService.js'
        resource url: '/js/ng-app/author/authorController.js'
    }
}
