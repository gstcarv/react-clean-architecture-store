import { render as defaultRender } from "@testing-library/react";
import { ReactElement } from "react";
import { ClassReference } from "../../../common/types/ClassReference";
import withModule from "../../contexts/ModuleProvider/withModule";
import "../../../modules/AppModule";

type RenderOptions = {
    module?: ClassReference;
};

export function render(element: ReactElement<any, any>, options?: RenderOptions) {
    if (options?.module) {
        const WithModule = withModule(options.module)(() => element);

        return defaultRender(<WithModule />);
    }

    return defaultRender(element);
}
