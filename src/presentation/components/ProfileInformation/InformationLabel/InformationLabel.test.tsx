import "../../../config/tests/setupTests";
import { render } from "@testing-library/react";
import InformationLabel from ".";

describe("<InformationLabel />", () => {
    test("It should render correctly", () => {
        const { getByText } = render(<InformationLabel title="mock-title" children="mock-content" />);

        expect(getByText("mock-content")).toBeInTheDocument();
        expect(getByText("mock-title")).toBeInTheDocument();
    });
});
