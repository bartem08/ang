import com.ang.Author
import com.ang.Book
import com.ang.Role
import com.ang.User
import com.ang.UserRole

class BootStrap {

    def init = { servletContext ->
//        new UserRole(
//                user: new User(username: 'artem', password: '1111').save(),
//                role: new Role(authority: 'ROLE_ADMIN').save()
//        ).save()
//        Author hohol = new Author(name: 'Nikolay', surname: 'Hohol').save()
//        Author bulh = new Author(name: 'Michail', surname: 'Bulhakov').save()
//        Author balzak = new Author(name: 'Onore', surname: 'de Balzak').save()
//        Author dikenz = new Author(name: 'Charlz', surname: 'Dikenz').save()
//
//        new Book(name: 'Viy', genre: 'Fantasy', author: hohol, year: 1835).save()
//        new Book(name: 'Nich pered Rizdvom', genre: 'Fiction', author: hohol, year: 1830).save()
//        new Book(name: 'Mertvi dushi', genre: 'Fantasy', author: hohol, year: 1842).save()
//
//        new Book(name: 'Master i Margarita', genre: 'Mysticism', author: bulh, year: 1937).save()
//        new Book(name: 'Sobache serdce', genre: 'Satire', author: bulh, year: 1925).save()
//
//        new Book(name: 'Tridcatiletniaia zenshina', genre: 'Fiction', author: balzak, year: 1831).save()
//        new Book(name: 'Gobsek', genre: 'Fiction', author: balzak, year: 1830).save()
//
//        new Book(name: 'Dombi i sun', genre: 'Novel', author: dikenz, year: 1848).save()
//        new Book(name: 'Kroshka Dorrit', genre: 'Movel', author: dikenz, year: 1855).save()
//        new Book(name: 'Dim z pryvydamy', genre: 'Fiction', author: dikenz, year: 1859).save()
    }
    def destroy = {
    }
}