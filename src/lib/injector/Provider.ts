import 'reflect-metadata';
import { ClassReference } from '../../common/types/ClassReference';
import { singleton } from 'tsyringe';

export const isProvider = Symbol('isProvider');

export function Provider() {
    return <T>(target: ClassReference<T>) => {
        singleton()(target);
        Reflect.defineMetadata(isProvider, true, target);
    };
}
