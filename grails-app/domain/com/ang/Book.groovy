package com.ang

class Book {

    String name
    String genre
    Short year
    Author author

    static constraints = {}

    static mapping = {
        table 'books'
        version false
    }

    Map<String, ?> toMap() {
        [
                id      : id,
                name    : name,
                genre   : genre,
                year    : year,
                author  : [
                        id  : author.id,
                        name: author.fullName
                ]
        ]
    }
}
