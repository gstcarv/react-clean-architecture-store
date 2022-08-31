import "../../config/tests/setupTests";
import { render } from "@testing-library/react";
import ProfileInformation from ".";
import { UserData } from "../../../modules/user/domain/UserData";
import { MockUserData } from "../../../tests/mocks/models/user/MockUserData";

describe("<ProfileInformation />", () => {
    test("It should render correctly", () => {
        const mockUserData = new MockUserData().create();

        const { getByText } = render(<ProfileInformation userData={mockUserData} />);

        expect(getByText("mock-company")).toBeInTheDocument();
        expect(getByText("mock-description")).toBeInTheDocument();
        expect(getByText("mock-location")).toBeInTheDocument();
        expect(getByText("mock-name")).toBeInTheDocument();
    });
});
