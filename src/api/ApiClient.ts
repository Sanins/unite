const API_HOST = "https://f1-motorsport-data.p.rapidapi.com";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export const apiClient = async <T>(
  endpoint: string,
  options: RequestInit & { params?: Record<string, string> } = {}
): Promise<T> => {
  const { params, ...fetchOptions } = options;

  const queryString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";
  const url = `${API_HOST}${endpoint}${queryString}`;

  const response = await fetch(url, {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "f1-motorsport-data.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
      ...fetchOptions.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};