import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

import { AbstractControl, ValidatorFn } from '@angular/forms';

export namespace CustomValidators {
  export function forbiddenEmailValidator(forbiddenEmail: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = forbiddenEmail && forbiddenEmail === control.value;
      return forbidden ? { forbiddenEmail: { value: control.value } } : null;
    };
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  error: boolean;

  registrationForm = this.formsBuilder.group({
    email: this.formsBuilder.control('', [
      Validators.required,
      Validators.email,
      CustomValidators.forbiddenEmailValidator('test@test.com'),
    ]),
    firstName: this.formsBuilder.control('', [Validators.required]),
    lastName: this.formsBuilder.control('', [Validators.required]),
    password: this.formsBuilder.control('', [Validators.required]),
  });

  constructor(private formsBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    if (this.registrationForm.valid) {
      const newUser: User = {
        email: this.registrationForm.controls.email.value,
        firstName: this.registrationForm.controls.firstName.value,
        lastName: this.registrationForm.controls.lastName.value,
        password: this.registrationForm.controls.password.value,
      };
      console.log(newUser);
      // TODO
    }
  }
}
