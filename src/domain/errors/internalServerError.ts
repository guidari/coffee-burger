export class InternalServerError extends Error {
  status: number;
  constructor() {
    super("O servidor encontrou um erro interno.");
    this.status = 500;
    this.name = "InternalServerError";
  }
}
