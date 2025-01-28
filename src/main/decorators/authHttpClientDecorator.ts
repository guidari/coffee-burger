import { HttpClient, HttpRequest, HttpResponse } from "../../data/protocols";

export class AuthHttpClientDecorator<BodyType, ResponseType> implements HttpClient<BodyType, ResponseType>{
  constructor(
    private readonly userToken: string,
    private readonly httpClient: HttpClient<BodyType, ResponseType>
  ) {}
  async request(data: HttpRequest<BodyType>): Promise<HttpResponse<ResponseType>> {

    if (this.userToken) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
            Authorization: `${this.userToken}`
        })
      })
    }

    const httpResponse = await this.httpClient.request(data);
    return httpResponse;
  }
}
