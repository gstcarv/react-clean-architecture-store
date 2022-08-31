import "../../config/tests/setupTests";
import SearchHeader from ".";
import { render } from "../../config/tests";
import { UserModule } from "../../../modules/user/UserModule";
import { ProviderMock } from "../../../tests/mocks/hooks/ProviderMock";
import { MockUserData } from "../../../tests/mocks/models/user/MockUserData";
import userEvent from "@testing-library/user-event";

describe("<UserSearch />", () => {
    test("It should render component correctly", () => {
        const { getByLabelText } = render(<SearchHeader />, {
            module: UserModule,
        });

        expect(getByLabelText("Github Profile")).toBeInTheDocument();
    });

    test("It should show user information after search", async () => {
        ProviderMock.use({
            UserDataSource: {
                getByProfile: jest.fn().mockResolvedValue(new MockUserData().create()),
            },
        });

        const { getByLabelText, getByRole, findByText } = render(<SearchHeader />, {
            module: UserModule,
        });

        userEvent.type(getByLabelText("Github Profile"), "mock-profile");

        userEvent.click(
            getByRole("button", {
                name: /Search Profile/,
            })
        );

        expect(await findByText("mock-name")).toBeInTheDocument();
        expect(await findByText("mock-description")).toBeInTheDocument();
    });

    test("It should show alert error if error on fetching profile", async () => {
        ProviderMock.use({
            UserDataSource: {
                getByProfile: jest.fn().mockRejectedValue(null),
            },
        });

        const { getByLabelText, getByRole, findByText } = render(<SearchHeader />, {
            module: UserModule,
        });

        userEvent.type(getByLabelText("Github Profile"), "mock-profile");

        userEvent.click(
            getByRole("button", {
                name: /Search Profile/,
            })
        );

        expect(await findByText("An error occurs trying to fetch user information. Check if the profile id is correct.")).toBeInTheDocument();
    });
});
