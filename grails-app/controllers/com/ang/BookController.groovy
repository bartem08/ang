package com.ang

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

@Secured('ROLE_ADMIN')
class BookController {

    def getAllBooks() {
        render Book.findAll().collect {
            [
                    id      : it.id,
                    name    : it.name,
                    genre   : it.genre,
                    author  : [
                            id  : it.author.id,
                            name: "${it.author.name} ${it.author.surname}"
                    ],
                    year    : it.year
            ]
        } as JSON
    }

    def getBookById(Long id) {
        render Book.get(id) as JSON
    }
}
