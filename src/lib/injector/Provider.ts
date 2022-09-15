import "reflect-metadata";
import { ClassReference } from "../../common/types/ClassReference";
import { injectable } from "inversify";

export const isProvider = Symbol("isProvider");

export function Provider() {
    return <T>(target: ClassReference<T>) => {
        injectable()(target);
        Reflect.defineMetadata(isProvider, true, target);
    };
}
