import { render, screen } from "@testing-library/react";
import { renderPositions } from "@/app/utils/renderpositions";
import { mockRaceReport } from "@/mocks/mockRaceReport";

describe("renderPositions", () => {
    it("should render the top 3 positions for Race type", () => {
        render(<>{renderPositions(mockRaceReport.report.positions, "Race")}</>);

        const positionElements = screen.getAllByText(/\. /);
        expect(positionElements.length).toBe(3);

        expect(positionElements[0]).toHaveTextContent("1. John Doe");
        expect(positionElements[1]).toHaveTextContent("2. Jane Smith");
        expect(positionElements[2]).toHaveTextContent("3. Alice Johnson");
    });

    it("should return an empty array if no positions match the raceType", () => {
        render(<>{renderPositions(mockRaceReport.report.positions, "Non-RaceType" as "Race" | "Qualifying")}</>);

        const positionElements = screen.queryAllByText(/\. /);
        expect(positionElements.length).toBe(0);
    });

    it("should limit the result to only the top 3 positions", () => {
        render(<>{renderPositions(mockRaceReport.report.positions, "Race")}</>);

        const positionElements = screen.getAllByText(/\. /);
        expect(positionElements.length).toBe(3);
    });
});