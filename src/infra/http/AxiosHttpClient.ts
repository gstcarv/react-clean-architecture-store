import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Environment } from '../../common/environment/Environment';
import { HttpClient, HttpGetParams } from '../../common/http/HttpClient';
import { HttpResponse } from '../../common/http/HttpResponse';
import { Provider } from '../../lib/injector/Provider';

@Provider()
export class AxiosHttpClient implements HttpClient {
    axiosInstance!: AxiosInstance;

    constructor(env: Environment) {
        const environment = env.get();
        this.axiosInstance = axios.create({ baseURL: environment.apiUrl });
    }

    async get<T>(url: string, params?: HttpGetParams | undefined): Promise<HttpResponse<T>> {
        const request = await this.axiosInstance.get(url, { params });
        return this.mapAxiosResponseToHttp(request);
    }
    async post<T, R = unknown>(url: string, body: T): Promise<HttpResponse<R>> {
        const request = await this.axiosInstance.post(url, body);
        return this.mapAxiosResponseToHttp(request);
    }

    async put<T, R = unknown>(url: string, body: T): Promise<HttpResponse<R>> {
        const request = await this.axiosInstance.put(url, body);
        return this.mapAxiosResponseToHttp(request);
    }

    async delete<T, R = unknown>(url: string, body: T): Promise<HttpResponse<R>> {
        const request = await this.axiosInstance.delete(url, body!);
        return this.mapAxiosResponseToHttp(request);
    }

    private mapAxiosResponseToHttp<T>(response: AxiosResponse): HttpResponse<T> {
        return {
            data: response.data,
            statusCode: response.status,
        };
    }
}
