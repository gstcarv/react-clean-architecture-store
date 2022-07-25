import { UserData } from "./UserData";

export abstract class UserDataSource {
    abstract getByProfile(profileId: string): Promise<UserData>;
}
