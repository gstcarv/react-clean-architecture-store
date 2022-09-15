import { renderHook } from '@testing-library/react-hooks';
import { setup } from '../withModule';
import { UserModule } from '../../../../../modules/user/UserModule';
import { useProvider } from '../../../../hooks/lib/useProvider';
import { UserDataSource } from '../../../../../modules/user/domain/UserDataSource';
import { render } from '@testing-library/react';
import '../../../../../modules/AppModule';

describe('useProvider', () => {
    test('setup should wrap component within a module', () => {
        let userDataSource: UserDataSource;

        const MockComponent = () => {
            const provider = useProvider(UserDataSource);
            userDataSource = provider;
            return null;
        };

        const WrapperComponent = setup(UserModule)(MockComponent);

        render(<WrapperComponent />);

        expect(userDataSource!.getByProfile).toBeInstanceOf(Function);
    });
});
