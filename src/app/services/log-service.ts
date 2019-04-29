/*import { Injectable } from '@angular/core';
import { appendFile } from 'fs';

@Injectable({
    providedIn: 'root',
})

export class LogService {

    // private fs = require('fs');

    contructor() { }

    log(type: string, message: string) {
        appendFile('angular-log.txt', `[${type}] - , ${message}`,  function(err) {
            if (err) {
                return console.error(err);
            }
        });
    }
}
*/