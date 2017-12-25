package com.ang

class Author {

    String name
    String surname

    static hasMany = [books: Book]

    static constraints = {}

    static mapping = {
        table 'authors'
        version false
    }

    String getFullName() {
        "$name $surname"
    }
}
