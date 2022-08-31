import { UserData } from "../../../../modules/user/domain/UserData";
import { TestMockFactory } from "../../types/TestMockFactory";

export class MockUserData extends TestMockFactory<UserData> {
    create(): UserData {
        return {
            avatarUrl: "mock-url",
            company: "mock-company",
            description: "mock-description",
            location: "mock-location",
            name: "mock-name",
        };
    }
}
