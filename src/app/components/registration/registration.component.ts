import {
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

const MAX_LENGTH = 10;

namespace CustomValidators {
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
  registrationForm = this.formBuilder.group({
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(MAX_LENGTH),
      CustomValidators.forbiddenEmailValidator('test@test.com'),
    ]),
    name: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    // TODO
  }

  hasEmailErrors() {
    return (
      this.registrationForm.get('email').invalid &&
      this.registrationForm.get('email').errors &&
      (this.registrationForm.get('email').dirty ||
        this.registrationForm.get('email').touched)
    );
  }

  log() {
    console.log(this.registrationForm.get('email').errors);
  }

  private getMsgFromErrorType(key: string) {
    switch (key) {
      case 'required':
        return 'the field is required!';
      case 'maxlength':
        return `longer than ${MAX_LENGTH}`;
      case 'email':
        return 'keinen gültigen email.';
      case 'forbiddenEmail':
        return 'email nicht erlaubt';
    }
  }

  getErrorMsgs() {
    let msgs = [];
    Object.keys(this.registrationForm.get('email').errors).forEach(
      (errorType) => {
        msgs.push(`${this.getMsgFromErrorType(errorType)}`);
      }
    );
    return msgs;
  }
}
