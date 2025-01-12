export type AthleteInfo = {
    displayName: string;
    team: string;
};

type Position = {
    order: number;
    type: "athlete";
    raceType: "Qualifying" | "Race";
    athleteInfo: AthleteInfo;
};

export type Positions = {
    competitionId: string;
    id: string;
    positions: Position[];
};

export type RaceReport = {
    report: {
        positions: Positions[];
        racestrip: {
            name: string;
        }
    }
};