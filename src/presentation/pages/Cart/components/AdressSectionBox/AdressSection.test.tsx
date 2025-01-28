import { render } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import AdressSection from ".";
import { AdressFormData } from "../..";

describe("AdressSection component", () => {
  it("renders correctly", () => {
    const Wrapper = (props: any) => {
      const formMethods = useForm<AdressFormData>();

      return <FormProvider {...formMethods}>{props.children}</FormProvider>;
    };
    render(
      <Wrapper>
        <AdressSection />
      </Wrapper>
    );
  });
});
