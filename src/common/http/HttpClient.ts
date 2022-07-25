import { HttpResponse } from "./HttpResponse";

export type HttpGetParams = { [key: string]: string | number };

export abstract class HttpClient {
    abstract get<T>(url: string, params?: HttpGetParams): Promise<HttpResponse<T>>;
    abstract post<T, R = unknown>(url: string, body: T): Promise<HttpResponse<R>>;
    abstract put<T, R = unknown>(url: string, body: T): Promise<HttpResponse<R>>;
    abstract delete<T, R = unknown>(url: string, body: T): Promise<HttpResponse<R>>;
}
