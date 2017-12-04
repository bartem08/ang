package com.ang

class Book {

    String name
    String genre
    Short year
    Author author

    static constraints = {}

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
