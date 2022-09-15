import { AxiosInstance } from 'axios';
import { AxiosHttpClient } from '../AxiosHttpClient';
import { MockProxy, mock } from 'jest-mock-extended';
import { MockEnvironment } from '../../../tests/mocks/common/environment/MockEnvironment';

describe('AxiosHttpClient', () => {
    let mockAxiosInstance: MockProxy<AxiosInstance>;

    let axiosHttpClient: AxiosHttpClient;

    function setup() {
        mockAxiosInstance = mock<AxiosInstance>();

        mockAxiosInstance.get.mockResolvedValue({ data: 'mock-data' });
        mockAxiosInstance.post.mockResolvedValue({ data: 'mock-data' });
        mockAxiosInstance.put.mockResolvedValue({ data: 'mock-data' });
        mockAxiosInstance.delete.mockResolvedValue({ data: 'mock-data' });

        axiosHttpClient = new AxiosHttpClient(MockEnvironment.create());
        axiosHttpClient.axiosInstance = mockAxiosInstance as AxiosInstance;
    }

    beforeEach(() => setup());

    describe('get', () => {
        test('it should call axios GET method sending parameters data', async () => {
            const result = await axiosHttpClient.get('mock-url', { param: 'mock-param' });

            expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
            expect(mockAxiosInstance.get).toHaveBeenCalledWith('mock-url', { params: { param: 'mock-param' } });

            expect(result.data).toBe('mock-data');
        });
    });

    describe('post', () => {
        test('it should call axios POST method sending parameters data', async () => {
            const result = await axiosHttpClient.post('mock-url', { body: 'mock-body' });

            expect(mockAxiosInstance.post).toHaveBeenCalledTimes(1);
            expect(mockAxiosInstance.post).toHaveBeenCalledWith('mock-url', { body: 'mock-body' });

            expect(result.data).toBe('mock-data');
        });
    });

    describe('put', () => {
        test('it should call axios PUT method sending parameters data', async () => {
            const result = await axiosHttpClient.put('mock-url', { body: 'mock-body' });

            expect(mockAxiosInstance.put).toHaveBeenCalledTimes(1);
            expect(mockAxiosInstance.put).toHaveBeenCalledWith('mock-url', { body: 'mock-body' });

            expect(result.data).toBe('mock-data');
        });
    });

    describe('delete', () => {
        test('it should call axios DELETE method sending parameters data', async () => {
            const result = await axiosHttpClient.delete('mock-url', { body: 'mock-body' });

            expect(mockAxiosInstance.delete).toHaveBeenCalledTimes(1);
            expect(mockAxiosInstance.delete).toHaveBeenCalledWith('mock-url', { body: 'mock-body' });

            expect(result.data).toBe('mock-data');
        });
    });
});
