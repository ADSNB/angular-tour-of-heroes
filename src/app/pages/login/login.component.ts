import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { ValidatorService } from '../../services/validator-service';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ ]
})

export class LoginComponent implements OnInit {

  login = new Login();
  errorArray = [];

  constructor(private _validator: ValidatorService, private _translate: TranslateService, private _loading: SpinnerVisibilityService) { }

  ngOnInit() { }

  ConfirmClick() {
    if (this.ValidateLogin()) {
      alert(this._translate.instant('VALID'));
    }
  }

  ValidateLogin(): boolean {
    // Test sanitizer (limpar espaçoes)
    // this.validator.sanitizeAndValidate(this.login, {}).forEach(e => this.errorArray.push(e.errorMessage));
    this._validator.validate(this.login, {}).forEach(e => this.errorArray.push(this._translate.instant(e.errorMessage)));

    if (this.errorArray.length > 0) {
      alert(this.errorArray.join('\n'));
      this.errorArray = [];
      return false;
    } else {
      return true;
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async demoSync() {
    this._loading.show();
    console.log('Taking a break async...');
    await this.sleep(3000);
    console.log('Tree second later');
    this._loading.hide();
  }
}
