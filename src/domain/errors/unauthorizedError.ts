export class UnauthorizedError extends Error {
  status: number;
  constructor() {
    super("Requisição não autorizada.");
    this.status = 401;
    this.name = "UnauthorizedError";
  }
}
