import { AxiosHttpClient } from "../../../infra";

export const MakeAxiosHttpClient = <BodyType, ResponseType>(): AxiosHttpClient<BodyType, ResponseType> => {
  return new AxiosHttpClient();
}
