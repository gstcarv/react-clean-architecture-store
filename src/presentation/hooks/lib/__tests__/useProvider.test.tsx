import '../../../../modules/AppModule';
import { renderHook } from '@testing-library/react-hooks';
import { ModuleNotFoundError } from '../../../../lib/errors/ModuleNotFoundError';
import { UserDataSource } from '../../../../modules/user/domain/UserDataSource';
import { UserModule } from '../../../../modules/user/UserModule';
import withModule from '../../../contexts/lib/ModuleProvider/withModule';
import { useProvider } from '../useProvider';
import { AppModule } from '../../../../modules/AppModule';
import { HttpClient } from '../../../../common/http/HttpClient';

describe('useProvider', () => {
    test('It should return correct implementation when UserDataSource abstraction provided on params', () => {
        const wrapper = ({ children }: any) => <>{children}</>;

        const withUserModule = withModule(UserModule)(wrapper);

        const { result } = renderHook(() => useProvider(UserDataSource), {
            wrapper: withUserModule,
        });

        expect(result.current.getByProfile).toBeInstanceOf(Function);
    });

    test('It should return correct implementation when HttpClient abstraction provided on params', () => {
        const wrapper = ({ children }: any) => <>{children}</>;

        const withAppModule = withModule(AppModule)(wrapper);

        const { result } = renderHook(() => useProvider(HttpClient), {
            wrapper: withAppModule,
        });

        expect(result.current.get).toBeInstanceOf(Function);
    });

    test('It should thrown error if no module provided', () => {
        const { result } = renderHook(() => useProvider(UserDataSource));
        expect(result.error).toBeInstanceOf(ModuleNotFoundError);
    });
});
