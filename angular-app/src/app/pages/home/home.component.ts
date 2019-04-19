import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myForm: FormGroup;
  name: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  langs: string[] = [
    'English',
    'German',
    'French'
  ];

  constructor() { }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.language = new FormControl();
}

createForm() {
  this.myForm = new FormGroup({
    name: new FormGroup({
      name: this.name,
      lastname: this.lastname
    }),
    password: this.password,
    email: this.email,
    language: this.language
  });
}

ngOnInit() {
  this.createFormControls();
  this.createForm();
}


}
