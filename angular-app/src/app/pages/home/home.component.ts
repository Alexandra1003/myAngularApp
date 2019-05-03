import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { map, filter } from 'rxjs/operators';
import { Signup } from 'src/app/shared/interfaces/signup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myForm: FormGroup;
  name: FormControl;
  lastname: FormControl;
  // email: FormControl;
  password: FormControl;
  language: FormControl;

  langs: string[] = [
    'English',
    'German',
    'French'
  ];

  /*  */
  @ViewChild('f') form: any;
  email: string = '';

  model: Signup = {
    name : '',
    lastname: '',
    email: '',
    password: '',
    language: ''
  }
  /*  */

  constructor() { }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    // this.email = new FormControl('', [
    //   Validators.required,
    //   Validators.pattern('[^ @]*@[^ @]*')
    // ]);
    this.language = new FormControl();
}

createForm() {
  this.myForm = new FormGroup({
    name: new FormGroup({
      name: this.name,
      lastname: this.lastname
    }),
    password: this.password,
    // email: this.email,
    language: this.language
  });
}

onSubmit(event) {
  event.preventDefault();

  if(this.form.valid) {
    console.log('it is valid');
    this.form.reset();
  } else {
    console.log('it is invalid');
  }


  // if(this.myForm.valid) {
  //   console.log('it is valid');
  //   this.myForm.reset();
  // } else {
  //   console.log('it is invalid');
  // }
}

ngOnInit() {
  this.createFormControls();
  this.createForm();
}


}
