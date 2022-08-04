export abstract class TestMockFactory<TClass> {
    abstract create(): jest.Mocked<TClass>;
}
