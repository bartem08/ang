package com.ang

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

@Secured('ROLE_ADMIN')
class BookController {

    def getAllBooks() {
        render Book.findAll().collect { it.toMap() } as JSON
    }

    def getBookById(Long id) {
        render Book.get(id).toMap() as JSON
    }

    def createBook(Book book) {
        render book.save().toMap() as JSON
    }

    def deleteBook(Long id) {
        Book.findById(id).delete(flush: true)
        render [:] as JSON
    }
}
