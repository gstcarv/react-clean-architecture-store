export interface AuthResult {
    user: {
        id: string;
        name: string;
        email: string;
    };
    accessToken: string;
    refreshToken: string;
}
