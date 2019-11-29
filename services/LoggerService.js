const fs = require('fs');

/**
 * Log into a given file
 */
export class LoggerService {

    constructor(filePath) {
        this.filePath = filePath;    
    }

    /**
     * Write an info log message
     * Prefix messages with  "INFO: "
     */
    info(message) {
    }

    /**
     * Write an error log message.
     * Prefix errors with  "ERROR: "
     */
    error(error) {
    }
}

module.exports = LoggerService;