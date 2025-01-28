import { HttpRequest, HttpResponse } from "..";

export interface HttpClient<BodyType = unknown, ResponseType = unknown> {
  request: (
    data: HttpRequest<BodyType>
  ) => Promise<HttpResponse<ResponseType>>
}
