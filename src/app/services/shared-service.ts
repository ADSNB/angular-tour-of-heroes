import { Injectable } from '@angular/core';
import { SharedModule } from '../modules/shared-module';

@Injectable({
// we declare that this service should be created
// and provided across all application
    providedIn: 'root',
})

export class SharedService {
    Validator() { return ''; }
}

export class SharedTranslation {

}
