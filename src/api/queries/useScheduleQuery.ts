"use client";

import { useQuery } from "@tanstack/react-query";
import { RaceSchedule } from "../../types/schedule.types";

export const useScheduleQuery = (year: string) => {
  return useQuery<RaceSchedule, Error>({
    queryKey: ["/schedule", { year }],
    enabled: !!year,
  });
};