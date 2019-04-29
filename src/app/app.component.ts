import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})

/* TODO
  Opcional: Verificar um modo de extender uma classe sem que tenha que replicar seu construtor
  Criar tela inicial
    Criar um tela nova com menu lateral que expande
    Criar treeview no menu lateral
  Criar rotas e redirecionamento de telas (login > menu inicial)
  Criar tela de cadastro de usuário
*/

export class AppComponent {

  constructor(private translate: TranslateService, private loading: SpinnerVisibilityService ) {
    if (localStorage['language'] === undefined) {
      this.translate.use('en');
    } else {
      this.translate.use(localStorage['language']);
    }
  }

  changeLanguage (language) {
    const selectedLanguage = this.translate.instant(language);
    localStorage.setItem('language', selectedLanguage);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async demoSync() {
    this.loading.show();
    console.log('Taking a break async...');
    await this.sleep(3000);
    console.log('Tree second later');
    this.loading.hide();
  }
}
