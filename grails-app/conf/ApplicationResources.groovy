modules = {

    application { resource url: '/js/application.js' }

    core {
        dependsOn 'application'
        defaultBundle 'core'

        resource url: '/js/lib/angular.js', disposition: 'head'
        resource url: '/css/general.css', disposition: 'head'
        resource url: '/js/lib/angular-cookies.js'
        resource url: '/js/lib/angular-ui-router.js'
    }

    angular {
        dependsOn 'core'
        defaultBundle 'core'

        resource url: '/js/ng-app/app.js'
        resource url: '/js/ng-app/configs/routing.js'
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

        resource url: '/js/ng-app/book/book.service.js'
        resource url: '/js/ng-app/book/controllers/book.controller.js'
        resource url: '/js/ng-app/book/controllers/create-book.controller.js'
        resource url: '/js/ng-app/book/controllers/book-details.controller.js'
        resource url: '/js/ng-app/validators/past-validator.directive.js'
        resource url: '/js/ng-app/common/filters/century.filter.js'
    }

    author {
        dependsOn 'angular'

        resource url: '/js/ng-app/author/author.service.js'
        resource url: '/js/ng-app/author/author.controller.js'
        resource url: '/js/ng-app/author/author.directive.js'
    }
}
