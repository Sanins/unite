import { Positions } from "@/types/raceReport.types";

export const renderPositions = (positions: Positions[], raceType: "Race" | "Qualifying") => {
    const filteredPositions = positions
        .map(position => position.positions)
        .flat()
        .filter((position) => position.raceType === raceType)
        .slice(0, 3);

    return filteredPositions.map((position, index) => (
        <div key={position.order}>
            <p>{`${index + 1}. ${position.athleteInfo.displayName} (${position.athleteInfo.team})`}</p>
        </div>
    ));
};