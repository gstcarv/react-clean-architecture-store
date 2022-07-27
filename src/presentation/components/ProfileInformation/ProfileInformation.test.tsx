import "../../config/tests/setupTests";
import { render } from "@testing-library/react";
import ProfileInformation from ".";
import { UserData } from "../../../modules/user/domain/UserData";

describe("<ProfileInformation />", () => {
    test("It should render correctly", () => {
        const mockUserData: UserData = {
            avatarUrl: "mock-url",
            company: "mock-company",
            description: "mock-description",
            location: "mock-location",
            name: "mock-name",
        };

        const { getByText } = render(<ProfileInformation userData={mockUserData} />);

        expect(getByText("mock-company")).toBeInTheDocument();
        expect(getByText("mock-description")).toBeInTheDocument();
        expect(getByText("mock-location")).toBeInTheDocument();
        expect(getByText("mock-name")).toBeInTheDocument();
    });
});
