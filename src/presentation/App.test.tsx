import App from "./App";
import { render } from "./config/tests";

describe("<App />", () => {
    test("should render", () => {
        render(<App />);
    });
});
