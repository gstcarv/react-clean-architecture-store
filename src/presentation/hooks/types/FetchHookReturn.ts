export type FetchHookReturn<TDataType> = {
    data: TDataType | undefined;
    isLoading: boolean;
    error: any;
};
