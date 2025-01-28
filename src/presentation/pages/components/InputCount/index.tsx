import { InputHTMLAttributes } from "react";
// Icons //
import { Minus, Plus } from "phosphor-react";

// Styles //
import { InputCountContainer } from "./styles";

interface InputCountProps extends InputHTMLAttributes<HTMLInputElement> {
  onAddOneProductUnity?: () => void;
  onRemoveProductUnity?: () => void;
}

export function InputCount({
  onRemoveProductUnity,
  onAddOneProductUnity,
  ...rest
}: InputCountProps) {
  return (
    <InputCountContainer>
      <button
        title="removeProductUnity"
        data-testid="removeProductUnity"
        type="button"
        onClick={onRemoveProductUnity}
      >
        <Minus size={16} weight="bold" />
      </button>

      {/* <label htmlFor="counter"> */}
      <input id="counter" type="number" {...rest} data-testid="counter" />
      {/* </label> */}

      <button
        title="addOneProductUnity"
        data-testid="addOneProductUnity"
        type="button"
        onClick={onAddOneProductUnity}
      >
        <Plus size={16} weight="bold" />
      </button>
    </InputCountContainer>
  );
}
