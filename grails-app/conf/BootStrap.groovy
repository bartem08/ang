import com.ang.Book
import com.ang.Role
import com.ang.User
import com.ang.UserRole

class BootStrap {

    def init = { servletContext ->
        new UserRole(
                user: new User(username: 'artem', password: '1111').save(),
                role: new Role(authority: 'ROLE_ADMIN').save()
        ).save()
        (0..10).each { new Book(name: "name$it", genre: "genre$it").save() }
    }
    def destroy = {
    }
}
