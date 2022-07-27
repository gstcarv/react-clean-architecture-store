import "../../config/tests/setupTests";
import { render } from "@testing-library/react";
import BaseLayout from ".";

describe("<BaseLayout />", () => {
    test("It should render", () => {
        const { getByText } = render(<BaseLayout>mock-content</BaseLayout>);
        expect(getByText("mock-content")).toBeInTheDocument();
    });
});
