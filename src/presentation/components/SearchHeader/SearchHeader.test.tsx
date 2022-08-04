import "../../config/tests/setupTests";
import SearchHeader from ".";
import { render } from "../../config/tests";
import { UserModule } from "../../../modules/user/UserModule";
import { UserDataSource } from "../../../modules/user/domain/UserDataSource";
import { UserData } from "../../../modules/user/domain/UserData";
import userEvent from "@testing-library/user-event";
import { act, waitFor } from "@testing-library/react";
import * as ProviderHook from "../../hooks/useProvider";
import { ClassReference } from "../../../common/types/ClassReference";

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

        jest.spyOn(ProviderHook, "useProvider").mockImplementation((provider): UserDataSource => {
            if (provider === UserDataSource) {
                return {
                    getByProfile: mockGetByProfileFn,
                };
            }

            return ProviderHook.useProvider(provider);
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

        jest.spyOn(ProviderHook, "useProvider").mockImplementation((provider): UserDataSource => {
            if (provider === UserDataSource) {
                return {
                    getByProfile: mockGetByProfileFn,
                };
            }

            return ProviderHook.useProvider(provider);
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
        });
    });
});
