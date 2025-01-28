import { HttpMethod } from "./httpMethod";
import { Headers } from "./headers";

export interface HttpRequest<BodyType> { 
  url: string, 
  method: HttpMethod, 
  body?: BodyType, 
  headers?: Headers 
  responseType?: any
}
