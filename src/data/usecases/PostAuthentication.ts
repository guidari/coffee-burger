import {
  Authentication,
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  PreconditionFailedError,
  UnauthorizedError,
  UnprocessableEntityError,
} from "../../domain"
import { HttpClient, HttpStatusCode } from "../protocols"

export class PostAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<
      Authentication.Params,
      Authentication.Model
    >
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}`,
      method: "post",
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.Ok:
        return httpResponse.body as Authentication.Model
      case HttpStatusCode.Forbidden:
        throw new ForbiddenError()
      case HttpStatusCode.PreconditionFailed:
        throw new PreconditionFailedError()
      case HttpStatusCode.UnprocessableEntity:
        throw new UnprocessableEntityError()
      case HttpStatusCode.BadRequest:
        throw new BadRequestError()
      case HttpStatusCode.Unauthorized:
        throw new UnauthorizedError()
      case HttpStatusCode.NotFound:
        throw new NotFoundError()
      default:
        throw new InternalServerError()
    }
  }
}
