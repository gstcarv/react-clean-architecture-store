import { HttpClient } from "../../../common/http/HttpClient";
import { Provider } from "../../../core/injector/Provider";
import { UserData } from "../domain/UserData";
import { UserDataSource } from "../domain/UserDataSource";
import { UserFetchResult } from "../domain/UserFetchResult";

@Provider()
export class UserService implements UserDataSource {
    constructor(private httpClient: HttpClient) {}

    async getByProfile(profileId: string): Promise<UserData> {
        const loginFetch = await this.httpClient.get<UserFetchResult>(`/users/${profileId}`);

        const { avatar_url, bio, company, location, name } = loginFetch.data;

        return {
            avatarUrl: avatar_url,
            company: company,
            description: bio,
            location: location,
            name: name,
        };
    }
}
