package com.ang

import grails.converters.JSON

class BookController {

    def getAllBooks() {
        render Book.findAll() as JSON
    }
}
