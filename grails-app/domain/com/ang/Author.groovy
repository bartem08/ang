package com.ang

class Author {

    String name
    String surname

    static hasMany = [books: Book]

    static constraints = {}

    String getFullName() {
        "$name $surname"
    }
}
