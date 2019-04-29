import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppStartupService } from '../services/app-startup-service';

export function init_app(appStartupService: AppStartupService) {
    return () => appStartupService.initializeApp();
}

/*
export function get_settings(appStartupService: AppStartupService) {
    return () => appStartupService.getSettings();
}*/

@NgModule( {
    imports: [HttpClientModule],
    providers: [
        AppStartupService,
        { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppStartupService], multi: true },
        /*{ provide: APP_INITIALIZER, useFactory: get_settings, deps: [AppStartupService], multi: true }*/
    ]
})
export class AppStartupModule { }
