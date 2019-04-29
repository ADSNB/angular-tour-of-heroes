import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { Validator } from 'validator.ts/Validator';

@Component({
  selector: 'app-validator-example',
  templateUrl: './validator-example.component.html',
  styleUrls: ['./validator-example.component.css']
})

export class ValidatorExampleComponent implements OnInit {

  validator = new Validator();
  errorList: string;

  post = new Post();

  constructor() { }

  ngOnInit() { }

  ConfirmClick() {

  this.post.title = 'Hello'; // should not pass
  this.post.text = 'this is a great post about hell world'; // should not pass
  this.post.rating = 11; // should not pass
  this.post.email = 'google.com'; // should not pass
  this.post.site = 'googlecom'; // should not pass

  const errors = this.validator.validate(this.post);

  errors.forEach(e => this.errorList += e.errorMessage + '\n');
  alert(this.errorList);
  }

}
