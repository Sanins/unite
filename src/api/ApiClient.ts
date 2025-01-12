const API_HOST = "https://f1-motorsport-data.p.rapidapi.com";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export const apiClient = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(`${API_HOST}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "f1-motorsport-data.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};