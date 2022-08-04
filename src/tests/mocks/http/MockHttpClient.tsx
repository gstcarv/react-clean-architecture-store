import { createMock } from "ts-jest-mock";
import { TestMockFactory } from "../types/TestMockFactory";
import { HttpClient } from "../../../common/http/HttpClient";

export class MockHttpClient extends TestMockFactory<HttpClient> {
    create(): jest.Mocked<HttpClient> {
        return createMock<HttpClient>({
            get: jest.fn(),
            post: jest.fn(),
            delete: jest.fn(),
            put: jest.fn(),
        });
    }
}
