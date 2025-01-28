import { PostAuthentication } from "../../../data";
import { Authentication } from "../../../domain";
import { apiRoutes } from "../../routes/apiRoutes";
import { MakeApiUrl, MakeAxiosHttpClient } from "../http";

export const MakeAuthentication = (): Authentication => {
  return new PostAuthentication(
    MakeApiUrl(apiRoutes.login),
    MakeAxiosHttpClient<Authentication.Params, Authentication.Model>()
  );
};
