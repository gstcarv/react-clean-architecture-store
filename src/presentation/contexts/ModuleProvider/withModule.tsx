import { ComponentType, useContext } from "react";
import { ModuleContext } from ".";
import { ClassReference } from "../../../common/types/ClassReference";

export default function withModule(module: ClassReference<any>) {
    return function <P>(Component: ComponentType<P>) {
        const WithModule = (props: P) => {
            return (
                <ModuleContext.Provider value={module}>
                    <Component {...props} />
                </ModuleContext.Provider>
            );
        };

        return WithModule;
    };
}

export const setup = (module: ClassReference<any>) => withModule(module);

export const useModule = () => useContext(ModuleContext);
