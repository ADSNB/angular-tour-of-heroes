import { Component, OnInit, AfterViewInit } from '@angular/core';
import { first } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})

export class PageNotFoundComponent implements OnInit, AfterViewInit {
  firstDigit = false;
  firstElement: Element;
  secondDigit = false;
  secondElement: Element;
  thirdDigit = false;
  thirdElement: Element;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.GetElements();
    this.SleepDigits();
    this.ResolveDigits();
  }

  GetElements() {
    this.firstElement = document.querySelector('.firstDigit');
    this.secondElement = document.querySelector('.secondDigit');
    this.thirdElement = document.querySelector('.thirdDigit');
  }

  SleepDigits() {
    this.SleepFirstDigit();
    this.SleepSecondDigit();
    this.SleepThirdDigit();
  }

  async SleepFirstDigit() {
    await this.sleep(800);
    this.firstDigit = true;
  }

  async SleepSecondDigit() {
    await this.sleep(1200);
    this.secondDigit = true;
  }

  async SleepThirdDigit() {
    await this.sleep(1600);
    this.thirdDigit = true;
  }

  async ResolveDigits() {
    while ( (this.firstDigit && this.secondDigit && this.thirdDigit) !== true ) {
      await this.sleep(100);

      this.firstElement.innerHTML = this.firstDigit ?
                                    '4' : this.RandomNum().toString();

      this.secondElement.innerHTML = this.secondDigit ?
                                    '0' : this.RandomNum().toString();

      this.thirdElement.innerHTML = this.thirdDigit ?
                                    '4' : this.RandomNum().toString();
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  RandomNum() {
    return Math.floor( Math.random() * 9 ) + 1;
  }
}
