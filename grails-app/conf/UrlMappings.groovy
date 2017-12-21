class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')

        "/books"(controller: 'book') {
            action = [
                    GET: 'getAllBooks',
                    POST: 'createBook'
            ]
        }

        "/books/$id"(controller: 'book') {
            action = [
                    GET: 'getBookById',
                    DELETE: 'deleteBook'
            ]
        }

        "/authors"(controller: 'author') {
            action = [GET: 'getAllAuthors']
        }

        "/authors/$id"(controller: 'author') {
            action = [GET: 'getById']
        }

        "500"(controller: 'error', action: 'handleInternalError')
	}
}
