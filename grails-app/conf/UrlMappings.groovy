class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')

        "/books/all"(controller: 'book') {
            action = [GET: 'getAllBooks']
        }

        "/books/$id"(controller: 'book') {
            action = [GET: 'getBookById']
        }
	}
}
