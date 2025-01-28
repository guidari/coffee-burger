import { HttpResponse } from "./httpResponse"
import { HttpRequest } from "./httpRequest"

export interface HttpClient<BodyType = unknown, ResponseType = unknown> { 
  request: (
    data: HttpRequest<BodyType>
  ) => Promise<HttpResponse<ResponseType>> 
}
