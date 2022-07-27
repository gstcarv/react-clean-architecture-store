import { HttpClient, HttpGetParams } from "../../../common/http/HttpClient";
import { HttpResponse } from "../../../common/http/HttpResponse";

export class MockHttpClient implements HttpClient {
    get(): Promise<HttpResponse<any>> {
        return new Promise((res) => res({ data: {}, statusCode: 200 }));
    }
    post(): Promise<HttpResponse<any>> {
        return new Promise((res) => res({ data: {}, statusCode: 200 }));
    }
    put(): Promise<HttpResponse<any>> {
        return new Promise((res) => res({ data: {}, statusCode: 200 }));
    }
    delete(): Promise<HttpResponse<any>> {
        return new Promise((res) => res({ data: {}, statusCode: 200 }));
    }
}
