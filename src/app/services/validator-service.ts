import { Injectable } from '@angular/core';
import { Validator } from 'validator.ts/Validator';

@Injectable({
// we declare that this service should be created
// and provided across all application
    providedIn: 'root',
})

export class ValidatorService extends Validator {
    constructor() {
        console.log('injetado validator.');
        super();
    }
}
