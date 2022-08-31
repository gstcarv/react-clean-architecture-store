import "../../config/tests/setupTests";
import SearchHeader from ".";
import { render } from "../../config/tests";
import { UserModule } from "../../../modules/user/UserModule";
import { UserData } from "../../../modules/user/domain/UserData";
import userEvent from "@testing-library/user-event";
import { act, waitFor } from "@testing-library/react";
import { ProviderMock } from "../../../tests/mocks/hooks/ProviderMock";

describe("<SearchHeader />", () => {
    test("It should render component correctly", () => {
        const { getByText } = render(<SearchHeader onDataFetched={jest.fn} onFetchError={jest.fn} />, {
            module: UserModule,
        });

        expect(getByText("Github Profile")).toBeInTheDocument();
    });

    test("It should get profile data on type search field", async () => {
        const mockOnDataFetchedFn = jest.fn();

        const mockGetByProfileFn = jest.fn().mockResolvedValue({
            avatarUrl: "mock-url",
            company: "mock-company",
            description: "mock-description",
            location: "mock-location",
            name: "mock-name",
        } as UserData);

        ProviderMock.use({
            UserDataSource: {
                getByProfile: mockGetByProfileFn,
            },
        });

        const { getByLabelText, getByRole } = render(<SearchHeader onDataFetched={mockOnDataFetchedFn} onFetchError={jest.fn} />, {
            module: UserModule,
        });

        const profileField = getByLabelText("Github Profile");
        userEvent.type(profileField, "mock-profile-id");

        const searchButton = getByRole("button", {
            name: /Search Profile/i,
        });

        act(() => userEvent.click(searchButton));

        await act(async () => {
            await waitFor(() => {
                expect(mockGetByProfileFn).toHaveBeenCalledWith("mock-profile-id");
                expect(mockGetByProfileFn).toHaveBeenCalledTimes(1);
            });
        });

        expect(mockOnDataFetchedFn).toHaveBeenCalledWith({
            avatarUrl: "mock-url",
            company: "mock-company",
            description: "mock-description",
            location: "mock-location",
            name: "mock-name",
        });
    });

    test("It should call onFetchError on error fetching user", async () => {
        const mockOnFetchErrorFn = jest.fn();
        const mockGetByProfileFn = jest.fn().mockRejectedValue({});

        ProviderMock.use({
            UserDataSource: {
                getByProfile: mockGetByProfileFn,
            },
        });

        const { getByLabelText, getByRole } = render(<SearchHeader onDataFetched={jest.fn} onFetchError={mockOnFetchErrorFn} />, {
            module: UserModule,
        });

        const profileField = getByLabelText("Github Profile");
        userEvent.type(profileField, "mock-profile-id");

        const searchButton = getByRole("button", {
            name: /Search Profile/i,
        });

        act(() => userEvent.click(searchButton));

        await waitFor(() => {
            expect(mockOnFetchErrorFn).toHaveBeenCalledTimes(1);
            expect(mockGetByProfileFn).toHaveBeenCalledTimes(1);
        });
    });
});
