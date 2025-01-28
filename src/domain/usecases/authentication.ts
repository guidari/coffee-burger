import { AuthenticationModel, AuthenticationParams } from "../models"

export namespace Authentication {
  export type Params = AuthenticationParams
  export type Model = AuthenticationModel
}

export interface Authentication {
  auth(params: Authentication.Params): Promise<Authentication.Model>
}
