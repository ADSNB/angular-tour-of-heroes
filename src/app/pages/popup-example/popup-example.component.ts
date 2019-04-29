import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-example',
  templateUrl: './popup-example.component.html',
  // styleUrls: ['./popup-example.component.css']
  styles: [ ':host { position: relative; bottom: 10%; }' ],
})
export class PopupExampleComponent implements OnInit {

  details: string;
  message: string;
  sending = false;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
