type Flag = {
    href: string;
    alt: string;
    rel: string[];
  };

type Headshot = {
    href: string;
    alt: string;
};

type Link = {
    language: string;
    rel: string[];
    href: string;
    text: string;
    shortText: string;
    isExternal: boolean;
    isPremium: boolean;
};

type AthleteInfo = {
    id: string;
    order: number;
    lastName: string;
    firstName: string;
    displayName: string;
    shortName: string;
    shortDisplayName: string;
    abbreviation: string;
    team: string;
    teamColor: string;
    flag: Flag;
    headshot: Headshot;
    links: Link[];
};

type StateInfo = {
    period: number;
    displayValue: string;
    name: string;
    state: string;
    completed: boolean;
    lapsCompleted: string;
    fastestLap: string;
    pitsTaken: string;
    fastestLapNum: string;
    place: string;
    totalTime: string;
};

type Position = {
    order: number;
    winner: boolean;
    type: "athlete";
    raceType: "Qualifying" | "Race";
    athleteInfo: AthleteInfo;
    stateInfo: StateInfo;
};

export type Positions = {
    competitionId: string;
    titleTab: string;
    id: string;
    state: string;
    date: string;
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