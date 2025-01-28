import axios, { AxiosResponse } from "axios"
import { HttpClient, HttpRequest, HttpResponse } from "../protocols"

export class AxiosHttpClient<BodyType, ResponseType>
  implements HttpClient<BodyType, ResponseType>
{
  async request<BodyType>(
    data: HttpRequest<BodyType>
  ): Promise<HttpResponse<ResponseType>> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        responseType: data.responseType,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}
