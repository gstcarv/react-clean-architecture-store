import { HttpClient } from "../../../../common/http/HttpClient";
import { UserService } from "../UserService";
import { anyString, instance, mock, when } from "ts-mockito";
import { UserData } from "../../domain/UserData";
import { HttpResponse } from "../../../../common/http/HttpResponse";
import { MockHttpClient } from "../../../../tests/mocks/http/MockHttpClient";

describe("UserService", () => {
    beforeEach(() => setup());

    const httpClientMock: HttpClient = mock(MockHttpClient);
    let userService: UserService;

    function setup() {
        const userResponseMock: HttpResponse<UserData> = {
            data: {
                avatarUrl: "mock-url",
                company: "mock-company",
                description: "mock-description",
                location: "mock-location",
                name: "mock-name",
            },
            statusCode: 200,
        };

        when(httpClientMock.get<UserData>(anyString())).thenResolve(userResponseMock);

        userService = new UserService(instance(httpClientMock));
    }

    describe("getByProfile", () => {
        test("it should return user information when success", async () => {
            const user = await userService.getByProfile("mock-profile");

            expect(user.name).toBe("mock-name");
            expect(user.company).toBe("mock-company");
        });
    });
});
