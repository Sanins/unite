import { apiClient } from '../api/ApiClient';

global.fetch = jest.fn();

describe('apiClient', () => {
    const mockApiKey = 'test-api-key';

    beforeEach(() => {
        process.env.NEXT_PUBLIC_API_KEY = mockApiKey;

        (fetch as jest.Mock).mockClear();
    });

    it('should throw an error if the API response is not ok', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
            json: jest.fn().mockResolvedValue({ message: 'Error' }),
        });

        await expect(apiClient('/endpoint')).rejects.toThrow('API error: 500');
    });

});