import { createContext } from 'react';
import { ClassReference } from '../../../../common/types/ClassReference';

export const ModuleContext = createContext<ClassReference<any> | null>(null);
