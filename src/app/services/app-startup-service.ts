import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

// import 'rxjs/add/operator/toPromise';
// import { resolve } from 'dns';
// import { reject } from '../../../node_modules/@types/q';

@Injectable({
    providedIn: 'root',
})

export class AppStartupService {

    constructor(private httpClient: HttpClient, private translateService: TranslateService) { }

    initializeApp(): Promise<any> {
        return new Promise((resolve/*, reject*/) => {
            console.log(`Função ao iniciar app executada ás ${new Date().toLocaleString()}.`);
            // this.translate.setDefaultLang('en');
            /*
            setTimeout(() => {
            console.log('initializeApp:: inside setTimeout');
            // doing something

            resolve();
            }, 3000);
            */
            resolve();
        });

        /*
        return new Promise((resolve, reject) => {
            console.log('initializeApp:: inside promise');

            setTimeout(() => {
            console.log('initializeApp:: inside setTimeout');
            // doing something

            resolve();
            }, 3000);
        });
        */
    }
/*
    getSettings(): Promise<any> {
        console.log('getSettings:: before http.get call');

        const promise = this.httpClient.get('http://private-1ad25-initializeng.apiary-mock.com/settings')
        .toPromise()
        .then(settings => {
            console.log('Settings from API: ', settings);

            APP_SETTINGS.connectionString = settings[0].value;
            APP_SETTINGS.defaultImageUrl = settings[1].value;

            console.log('APP_SETTINGS: ', APP_SETTINGS);

            return settings;
        });

        return promise;
    }
*/
}
