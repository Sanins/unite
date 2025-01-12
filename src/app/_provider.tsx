"use client";

import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import { apiClient } from "../api/ApiClient";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: async ({ queryKey }) => {
                const [endpoint, params] = queryKey as [string, Record<string, unknown>?];
                const queryParams = params
                    ? "?" +
                    new URLSearchParams(params as Record<string, string>).toString()
                    : "";
                return apiClient(endpoint + queryParams);
            },
            staleTime: 1000 * 60 * 10, // Default cache time for queries
        },
    },
});

export default function Provider({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}