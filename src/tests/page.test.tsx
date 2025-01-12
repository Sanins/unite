import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Page from "@/app/page";
import { mockRaceReport } from "@/mocks/mockRaceReport";
import { useRaceReportQuery, useScheduleQuery } from "@/api/queries";

jest.mock("../api/queries", () => ({
    useScheduleQuery: jest.fn(),
    useRaceReportQuery: jest.fn(),
}));

describe("Page component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render the loading spinner when data is loading", () => {
        (useScheduleQuery as jest.Mock).mockReturnValue({
            isLoading: true,
            data: null,
            error: null,
        });
        (useRaceReportQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: null,
            error: null,
        });

        render(<Page />);

        expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    });

    it("should display an error message if schedule query fails", async () => {
        (useScheduleQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: null,
            error: { message: "Schedule Error" },
        });
        (useRaceReportQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: null,
            error: null,
        });

        render(<Page />);

        expect(await screen.findByText("Error: Schedule Error")).toBeInTheDocument();
    });

    it("should render error message when event data fails", async () => {
        (useScheduleQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: { "2024": [{ evLink: "event/1", gPrx: "Grand Prix 1", winner: "Winner 1" }] },
            error: null,
        });

        (useRaceReportQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: null,
            error: { message: "Event Data Error" },
        });

        render(<Page />);

        fireEvent.click(screen.getByText("Find more about the event"));

        expect(screen.getByText("Error: Event Data Error")).toBeInTheDocument();
    });

    it("should render top 3 positions for Race and Qualifying", async () => {
        (useScheduleQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: { "2024": [{ evLink: "event/1", gPrx: "Grand Prix 1", winner: "Winner 1" }] },
            error: null,
        });

        (useRaceReportQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: mockRaceReport,
            error: null,
        });

        render(<Page />);

        fireEvent.click(screen.getByText("Find more about the event"));

        await waitFor(() => {
            expect(screen.getByText("Top 3 Positions for Race")).toBeInTheDocument();
            expect(screen.getByText("Top 3 Positions for Qualifying")).toBeInTheDocument();
        });
    });
});