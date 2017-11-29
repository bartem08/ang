import com.ang.Book

class BootStrap {

    def init = { servletContext ->
        (0..10).each { new Book(name: "name$it", genre: "genre$it").save() }
    }
    def destroy = {
    }
}
