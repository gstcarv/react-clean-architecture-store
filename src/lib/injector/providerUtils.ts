import { ClassReference } from "../../common/types/ClassReference";
import "reflect-metadata";
import { isProvider } from "./Provider";

export const checkIfProvider = <T>(classRef: ClassReference<T>) => {
    return Reflect.getMetadata(isProvider, classRef) === true;
};
