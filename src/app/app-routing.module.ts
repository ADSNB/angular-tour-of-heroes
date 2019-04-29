import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PopupExampleComponent } from './pages/popup-example/popup-example.component';

@NgModule({
  imports: [
    RouterModule.forRoot (
      [
        { path: 'Login', component: LoginComponent },
        { path: 'Page-Not-Found', component: PageNotFoundComponent },
        { path: 'compose', component: PopupExampleComponent, outlet: 'popup' },
        { path: '',   redirectTo: '/Login', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }
        // { path: 'hero/:id', component: HeroDetailComponent } Parameter link
        // outlet = rota secundaria
      ]
    )
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
