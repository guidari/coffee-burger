import { HttpStatusCode } from ".."

export type HttpResponse<BodyType = unknown> = {
  statusCode: HttpStatusCode
  body?: BodyType | Object
  responseType?: any
}
