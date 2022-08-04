import "../../config/tests/setupTests";
import SearchHeader from ".";
import { render } from "../../config/tests";
import { UserModule } from "../../../modules/user/UserModule";

describe("<UserSearch />", () => {
    test("It should render component correctly", () => {
        const { getByText } = render(<SearchHeader />, {
            module: UserModule,
        });

        expect(getByText("Github Profile")).toBeInTheDocument();
    });
});
