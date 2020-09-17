import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appForbiddenEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomValidatorDirective,
      multi: true,
    },
  ],
})
export class CustomValidatorDirective implements Validator {
  @Input('appForbiddenEmailValidator')
  forbiddenEmail: string;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    if (this.forbiddenEmail && control.value === this.forbiddenEmail) {
      return { forbiddenName: { value: control.value } };
    }
    return null;
  }
}
