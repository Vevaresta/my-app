import { Directive, input, numberAttribute } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { priceMaximumValidator } from './price-maximum.validator';

@Directive({
  selector: '[appPriceMaximum]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PriceMaximum,
      multi: true
    }
  ]
})
export class PriceMaximum implements Validator{

  appPriceMaximum = input(undefined, {
    alias: "threshold",
    transform: numberAttribute
  })

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.appPriceMaximum
      ? priceMaximumValidator(this.appPriceMaximum()!)(control)
      : null;
  }
  
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
