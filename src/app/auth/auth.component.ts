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
      fullName: ['',],
      userName: [''],
      userEmail: ['', Validators.email],
      userPhone: [
        '', Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
      ],
      userAdress: ['',],
      userSuite: [''],
      userCity: ['', Validators.required],
      userZIP: ['', Validators.required]
    });
  }
  get fullName() {
    return this.profileForm.get('fullName')!;
  }

  get userName() {
    return this.profileForm.get('userName')!;
  }
  get userEmail() {
    return this.profileForm.get('userEmail')!;
  }

  get userPhone() {
    return this.profileForm.get('userPhone')!;
  }

  get userAdress() {
    return this.profileForm.get('userAdress')!;
  }
  get userSuite() {
    return this.profileForm.get('userSuite')!;
  }
  get userCity() {
    return this.profileForm.get('userCity')!;
  }
  get userZIP() {
    return this.profileForm.get('userZIP')!;
  }

  onSubmit(form: FormGroup) {
    console.log(form.value)
  }
}


