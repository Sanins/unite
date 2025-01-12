"use client";

import { useScheduleQuery, useRaceReportQuery } from "@/api/queries";
import { YearRangeDropdown } from "@/components/yearRangeDropdown/yearRangeDropdown";
import { useState } from "react";
import { renderPositions } from "./utils/renderpositions";

export default function Home() {
  const [year, setYear] = useState("2024");
  const { data, error, isLoading } = useScheduleQuery(year);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const { data: eventData, error: eventError, isLoading: eventLoading } = useRaceReportQuery(selectedEventId);

  const handleEventClick = (eventId: string) => {
    setSelectedEventId(eventId);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (eventLoading) return <p>Loading...</p>;
  if (eventError) return <p>Error: {eventError.message}</p>;

  return (
    <div>
      <YearRangeDropdown year={year} setYear={setYear} />

      {Object.entries(data || {}).map(([date, events]) => (
        <div key={date}>
          <h2>{date}</h2>
          {events.map((event) => {
            const cvLink = "/f1/race/_/id/600041133";
            const id = cvLink.split("/").pop() || '';

            return (
              <div key={event.evLink}>
                <p>Winner: {event.winner}</p>
                <p>Grand Prix: {event.gPrx}</p>
                {id ? (
                  <button onClick={() => handleEventClick(id)}>
                    Find more about the event
                  </button>
                ) : (
                  <p>Sorry no more info about this event</p>
                )
                }
              </div>
            )
          })}
        </div>
      ))}

      {selectedEventId && eventData && (
        <div>
          <h3>Top 3 Positions for Race and Qualifying</h3>
          <div>
            <h4>Race Positions</h4>
            {renderPositions(eventData.report.positions, "Race")}
          </div>
          <div>
            <h4>Qualifying Positions</h4>
            {renderPositions(eventData.report.positions, "Qualifying")}
          </div>
        </div>
      )}
    </div>
  );
}