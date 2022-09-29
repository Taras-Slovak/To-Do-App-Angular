import { SingUp } from './../models/sign-up.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  profileForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['',],
      username: [''],
      email: ['', Validators.email],
      phone: [
        '', Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
      ],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: ['', Validators.required],
        zipcode: ['', Validators.required]
      }),
    });
  }
  get name() {
    return this.profileForm.get('name')!;
  }

  get username() {
    return this.profileForm.get('username')!;
  }
  get email() {
    return this.profileForm.get('email')!;
  }

  get phone() {
    return this.profileForm.get('phone')!;
  }

  get street() {
    return this.profileForm.get('address.street')!;
  }
  get suite() {
    return this.profileForm.get('address.suite')!;
  }
  get city() {
    return this.profileForm.get('address.city')!;
  }
  get zipcode() {
    return this.profileForm.get('address.zipcode')!;
  }

  onSubmit(form: FormGroup) {
    console.log(form.value)
  }
}


