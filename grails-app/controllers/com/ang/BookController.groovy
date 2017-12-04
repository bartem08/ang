package com.ang

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

@Secured('ROLE_ADMIN')
class BookController {

    def getAllBooks() {
        render Book.findAll().collect { it.toMap() } as JSON
    }

    def getBookById(Long id) {
        render Book.get(id) as JSON
    }

    def createBook(Book book) {
        render book.save().toMap() as JSON
    }
}
