package com.ang

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR

class ErrorController {

    def handleInternalError() {

        render  status: INTERNAL_SERVER_ERROR.value(),
                text: request.exception.message
    }
}
