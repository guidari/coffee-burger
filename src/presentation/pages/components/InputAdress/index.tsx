import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import {
  ErrorMessageStyleContainer,
  InputAdressContainer,
  InputText,
} from "./style";

interface IInputAdress {
  placeholder: string;
  registerName: string;
  type?: string;
}

export default function InputAdress({
  placeholder,
  registerName,
  type,
}: IInputAdress) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const value = localStorage.getItem(`coffeeDelivery-${registerName}`);

  return (
    <InputAdressContainer>
      <label htmlFor={registerName}>
        <InputText
          aria-label={placeholder}
          id={registerName}
          placeholder={placeholder}
          {...register(registerName)}
          type={type}
          defaultValue={value ? value : ""}
          data-testid="input"
        />
      </label>
      <ErrorMessageStyleContainer>
        <ErrorMessage errors={errors} name={registerName} />
      </ErrorMessageStyleContainer>
    </InputAdressContainer>
  );
}
