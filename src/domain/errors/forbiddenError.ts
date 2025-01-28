export class ForbiddenError extends Error {
  status: number;
  constructor() {
    super("Você não está autorizado a acessar este recurso.");
    this.status = 403;
    this.name = "ForbiddenError";
  }
}
