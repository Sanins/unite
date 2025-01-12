"use client";

import { RaceReport } from "@/types/raceReport.types";
import { useQuery } from "@tanstack/react-query";

export const useRaceReportQuery = (eventId: string | null) => {
  return useQuery<RaceReport, Error>({
    queryKey: ["/race-report", { eventId }],
    enabled: !!eventId,
  });
};