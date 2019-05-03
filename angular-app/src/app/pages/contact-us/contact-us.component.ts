import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  myForm: FormGroup;
  name: FormControl;
  comment: FormControl;

  constructor() { }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.comment = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      name: this.name,
      comment: this.comment
    });
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.myForm.valid) {
      console.log('it is valid');
      this.myForm.reset();
    } else {
      console.log('it is invalid');
    }
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

}
