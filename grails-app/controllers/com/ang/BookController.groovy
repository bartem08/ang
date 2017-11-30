package com.ang

import grails.converters.JSON

class BookController {

    def getAllBooks() {
        render Book.findAll() as JSON
    }

    def getBookById(Long id) {
        render Book.get(id) as JSON
    }
}
