import { HttpClient } from "../../../common/http/HttpClient";
import { Provider } from "../../../core/injector/Provider";
import { AuthCredentials } from "../domain/AuthCredentials";
import { AuthDataSource } from "../domain/AuthDataSource";
import { AuthResult } from "../domain/AuthResult";

@Provider()
export class AuthService implements AuthDataSource {
    constructor(private httpClient: HttpClient) {}

    async login(credentials: AuthCredentials): Promise<AuthResult> {
        const loginFetch = await this.httpClient.post<AuthCredentials, AuthResult>("/login", credentials);
        return loginFetch.data;
    }
}
