import { AuthCredentials } from "./AuthCredentials";
import { AuthResult } from "./AuthResult";

export abstract class AuthDataSource {
    abstract login(credentials: AuthCredentials): Promise<AuthResult>;
}
