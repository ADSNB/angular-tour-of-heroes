import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})

export class TranslationService extends TranslateService {
    // Verificar uma maneira de extender o serviço de tradução sem que tenha que criar um método duplicado da classe
    // constructor() { super(); }
}
