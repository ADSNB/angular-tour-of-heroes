import { NgModule, Injectable } from '@angular/core';

// Locales translation
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    console.log(`Injetado as traduções ás ${new Date().toLocaleString()}.`);
    const loaderFactory = new TranslateHttpLoader(http, '/assets/languages/', '.json');
    return loaderFactory;
}

@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }) ],
    exports: [
        TranslateModule
    ],
    providers: [ ],
})

export class TranslationModule { }
