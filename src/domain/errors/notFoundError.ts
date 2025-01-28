export class NotFoundError extends Error {
  status: number;
  constructor() {
    super("O servidor não conseguiu encontrar o recurso solicitado.");
    this.status = 404;
    this.name = "NotFoundError";
  }
}
