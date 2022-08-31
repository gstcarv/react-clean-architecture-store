import { UserDataSource } from "../../../modules/user/domain/UserDataSource";
import * as ProviderHook from "../../../presentation/hooks/useProvider";

const providerNamesMap = {
    UserDataSource,
} as const;

type ProviderName = keyof typeof providerNamesMap;

type MockProviderOptions = {
    [Key in ProviderName]: Partial<InstanceType<typeof providerNamesMap[Key]>>;
};

export const ProviderMock = {
    use: (options: MockProviderOptions) => {
        return jest.spyOn(ProviderHook, "useProvider").mockImplementation((provider): UserDataSource => {
            for (let providerName in options) {
                if (provider.name === providerName) {
                    return options[providerName as ProviderName] as any;
                }
            }

            return ProviderHook.useProvider(provider);
        });
    },
};
