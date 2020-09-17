import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
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
  fordbiddenEmail: string;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('forbiddenEmail', this.fordbiddenEmail, 'value', control.value);
    if (this.fordbiddenEmail && control.value === this.fordbiddenEmail) {
      return { fordbiddenEmail: { value: control.value } };
    }
    return null;
  }
}
