export class UnprocessableEntityError extends Error {
  status: number;
  constructor() {
    super("O servidor não conseguiu processar o conteúdo da requisição.");
    this.status = 422;
    this.name = "UnprocessableError";
  }
}
