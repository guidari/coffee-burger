export class BadRequestError extends Error {
  status: number;
  constructor(message?: string) {
    super("O servidor não conseguiu processar a requisição.");
    this.status = 400;
    this.name = "BadRequestError";
    this.message = message
      ? message
      : "O servidor não conseguiu processar a requisição.";
  }
}
