import { useFormContext } from "react-hook-form";
import {
  AdressBoxContainer,
  Instrunctions,
  AdressForm,
  Grid2,
  Grid3,
  Grid1,
} from "./style";

import LocationYellowLine from "../../../../assets/images/locationYellowLine.svg";
import InputAdress from "../../../components/InputAdress";

export default function AdressBox() {
  return (
    <AdressBoxContainer>
      <Instrunctions>
        <img src={LocationYellowLine} alt="Icone de localização" />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Instrunctions>

      <AdressForm>
        <Grid1>
          <InputAdress placeholder="CEP" registerName="cep" type="number" />
        </Grid1>
        <InputAdress placeholder="Rua" registerName="street" />

        <Grid2>
          <InputAdress
            placeholder="Número"
            registerName="homeNumber"
            type="number"
          />
          <InputAdress placeholder="Complemento" registerName="spotTip" />
        </Grid2>
        <Grid3>
          <InputAdress placeholder="Bairro" registerName="neighborhood" />
          <InputAdress placeholder="Cidade" registerName="city" />
          <InputAdress placeholder="UF" registerName="uf" />
        </Grid3>
      </AdressForm>
    </AdressBoxContainer>
  );
}
