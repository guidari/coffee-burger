export type AuthenticationModel = {
  userName: string;
  email: string;
  token: string;
};

export type AuthenticationParams = {
  login: string;
  password: string;
};

export namespace Authentication {
  export type Params = AuthenticationParams;
  export type Model = AuthenticationModel;
}

export interface Authentication {
  auth(params: Authentication.Params): Promise<Authentication.Model>;
}
