import { MinLengthError } from "../../errors";
import { FieldValidation } from "../../protocols";

export class MinLengthValidator implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}
  Error: any
  
  validate(value: string): Error | null{
    return value.length >= this.minLength 
      ? null
      : new MinLengthError(this.minLength)
  }
}
