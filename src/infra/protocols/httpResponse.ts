import { HttpStatusCode } from "./httpStatusCode"

export type HttpResponse<BodyType = unknown> = {
  statusCode: HttpStatusCode
  body?: BodyType
  responseType?: string
}
