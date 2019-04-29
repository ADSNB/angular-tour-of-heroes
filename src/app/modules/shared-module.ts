import { NgModule } from '@angular/core';

import { Validator } from 'validator.ts/Validator';
import { TranslationModule } from './translation-module';


/*
    TODO Não entedemos como funciona o shared module,
    O como fazer a chamada individual de cada componente contido nele  (validator, translation) em um outro componente
*/

@NgModule({
    imports: [ ],
    exports: [
        Validator,
        TranslationModule
    ],
    providers: [ ],
})

export class SharedModule { }
