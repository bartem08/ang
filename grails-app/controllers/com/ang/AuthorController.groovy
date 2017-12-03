package com.ang

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured

@Secured('ROLE_ADMIN')
class AuthorController {

    def getAllAuthors() {
        render Author.findAll().collect {
            [
                    id  : it.id,
                    name: it.fullName
            ]
        } as JSON
    }
}
