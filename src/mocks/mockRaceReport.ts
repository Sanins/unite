import { RaceReport } from "@/types/raceReport.types";

export const mockRaceReport: RaceReport = {
    report: {
      positions: [
        {
          competitionId: "competition-123",
          id: "position-1",
          positions: [
            {
              order: 1,
              type: "athlete",
              raceType: "Race",
              athleteInfo: {
                displayName: "John Doe",
                team: 'lala',
              },
            },
            {
              order: 2,
              type: "athlete",
              raceType: "Race",
              athleteInfo: {
                displayName: "Jane Smith",
                team: 'lala',
              },
            },
            {
              order: 3,
              type: "athlete",
              raceType: "Race",
              athleteInfo: {
                displayName: "Alice Johnson",
                team: 'lala',
              },
            },
          ],
        },
      ],
      racestrip: {
        name: "Grand Prix",
      },
    },
  };