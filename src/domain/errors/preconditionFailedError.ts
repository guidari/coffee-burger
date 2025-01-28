export class PreconditionFailedError extends Error {
  status: number;
  constructor() {
    super("Sua sessão expirou, faça novamente o login");
    this.status = 412;
    this.name = "PreconditionFailed";
  }
}
