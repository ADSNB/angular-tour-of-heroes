// Módulo core da aplicação
import { NgModule } from '@angular/core';

// Módulos do Form
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material-module';

// Módulos
// Componente de Tradução
import { TranslationModule } from './modules/translation-module'; // injetar
// import { AppStartupModule } from './modules/app-startup-module';

// Interceptador de HTTP request - Componente de loading
import { LoadingModule } from './modules/loading-module';

// Telas
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PopupExampleComponent } from './pages/popup-example/popup-example.component';

// Telas de Exemplo de componentes
import { ValidatorExampleComponent } from './test-templates/validator-ts/validator-example/validator-example.component';

// Rotas da aplicação
import { AppRoutingModule } from './app-routing.module';

// Serviços da aplicação
import { ValidatorService } from './services/validator-service';

// import { AppStartupService } from './services/app-startup-service';
// import { TranslateService } from '@ngx-translate/core';
// import { TranslationService } from './services/translation-service'; TODO no arquivo
// import { LogService } from './services/log-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    PopupExampleComponent,
    ValidatorExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    TranslationModule,
    LoadingModule,
    // AppStartupModule
  ],
  exports: [
    BrowserModule
  ],
  providers: [
    ValidatorService,
    // AppStartupService,
    // TranslateService,
    // TranslationService,
    // LogService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
