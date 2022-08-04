import { HttpClient } from "../../../../common/http/HttpClient";
import { UserService } from "../UserService";
import { UserData } from "../../domain/UserData";
import { HttpResponse } from "../../../../common/http/HttpResponse";
import { MockHttpClient } from "../../../../tests/mocks/http/MockHttpClient";

describe("UserService", () => {
    let httpClientMock: jest.Mocked<HttpClient>;

    let userService: UserService;

    function setup() {
        httpClientMock = new MockHttpClient().create();

        userService = new UserService(httpClientMock);
    }

    beforeEach(() => setup());

    describe("getByProfile", () => {
        test("it should return user information when success", async () => {
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

            httpClientMock.get.mockResolvedValue(userResponseMock);

            const user = await userService.getByProfile("mock-profile");

            expect(user.name).toBe("mock-name");
            expect(user.company).toBe("mock-company");

            expect(httpClientMock.get).toHaveBeenCalled();
        });
    });
});
