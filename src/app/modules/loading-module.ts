import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
    imports: [ ],
    exports: [
        HttpClientModule,
        NgHttpLoaderModule],
    providers: [ ],
})

export class LoadingModule { }
