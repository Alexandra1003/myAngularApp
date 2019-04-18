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
  name: FormGroup;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  langs: string[] = [
    'English',
    'German',
    'French'
  ];

  constructor() {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name : new FormGroup({
        name: new FormControl(),
        lastname : new FormControl()
      }),
      password : new FormControl(),
      email : new FormControl(),
      language : new FormControl()
    });
  }

}
