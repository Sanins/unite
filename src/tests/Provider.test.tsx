import { render, screen, waitFor } from '@testing-library/react';
import { QueryClientProvider, useQuery } from '@tanstack/react-query';
import { queryClient } from '@/app/_provider';

jest.mock('../api/ApiClient', () => ({
  apiClient: jest.fn() as jest.Mock,
}));

import { apiClient } from '@/api/ApiClient';

function TestComponent() {
  const { data, isLoading } = useQuery<{ message: string }, Error>({
    queryKey: ['endpoint', { param1: 'value1' }],
    queryFn: async ({ queryKey }): Promise<{ message: string }> => {
      const [endpoint, params] = queryKey;
      const queryParams = new URLSearchParams(params as Record<string, string>).toString();
      const response = await apiClient(endpoint + '?' + queryParams);
      return response as { message: string };
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return <div>{data?.message}</div>;
}

describe('QueryClient Test', () => {
  it('should call apiClient with the correct query params', async () => {
    const mockData = { message: 'Success' };

    (apiClient as jest.Mock).mockResolvedValueOnce(mockData);

    render(
      <QueryClientProvider client={queryClient}>
        <TestComponent />
      </QueryClientProvider>
    );

    await waitFor(() => screen.getByText(mockData.message));

    expect(apiClient).toHaveBeenCalledWith('endpoint?param1=value1');
  });
});