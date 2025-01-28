import { RequiredFieldError } from "../../errors";
import { FieldValidation } from "../../protocols";

export class RequiredFieldValidator implements FieldValidation {
  constructor(readonly field: string) {}
  Error: any;

  validate(value: string): null | Error {
    return value ? null : new RequiredFieldError();
  }
}
