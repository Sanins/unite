"use client";

import { useScheduleQuery, useRaceReportQuery } from "@/api/queries";
import { YearRangeDropdown } from "@/components/yearRangeDropdown/yearRangeDropdown";
import { useState } from "react";
import { renderPositions } from "./utils/renderpositions";
import * as Styled from './Page.style';

const Spinner = () => (
  <Styled.Overlay>
    <div className="spinner"></div>
  </Styled.Overlay>
);

const ErrorMessage = ({ message }: { message: string }) => (
  <Styled.Overlay>
    <div className="error-message">
      <p>{message}</p>
    </div>
  </Styled.Overlay>
);

export default function Home() {
  const [year, setYear] = useState("2024");
  const { data, error, isLoading } = useScheduleQuery(year);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const { data: eventData, error: eventError, isLoading: eventLoading } = useRaceReportQuery(selectedEventId);

  const handleEventClick = (eventId: string) => {
    setSelectedEventId(eventId);
  };

  return (
    <Styled.Wrapper>
      {isLoading || eventLoading && <Spinner />}
      <Styled.Title>Formula 1 Event Schedule</Styled.Title>
      <YearRangeDropdown year={year} setYear={setYear} />

      {error && <ErrorMessage message={`Error: ${error.message}`} />}
      <Styled.Container>
        <Styled.RaceWrapper>
          {Object.entries(data || {}).map(([date, events]) => (
            <div key={date}>
              {events.map((event) => {
                const cvLink = event.evLink;
                const id = cvLink.split("/").pop() || '';

                return (
                  <Styled.RaceCard key={event.evLink}>
                    <Styled.EventInfo>
                      <p>Winner: {event.winner}</p>
                      <p>Grand Prix: {event.gPrx}</p>
                    </Styled.EventInfo>
                    {id ? (
                      <Styled.Button onClick={() => handleEventClick(id)}>
                        Find more about the event
                      </Styled.Button>
                    ) : (
                      <p>Sorry no more info about this event</p>
                    )}
                    {eventError && <ErrorMessage message={`Error: ${eventError.message}`} />}

                  </Styled.RaceCard>
                );
              })}
            </div>
          ))}
        </Styled.RaceWrapper>


        {selectedEventId && eventData && (
          <Styled.EventDetails>
            <Styled.Subtitle>Event: {eventData.report.racestrip.name}</Styled.Subtitle>
            <Styled.PositionsContainer>
              <Styled.PositionHeader>Top 3 Positions for Race</Styled.PositionHeader>
              {renderPositions(eventData.report.positions, "Race")}
            </Styled.PositionsContainer>
            <Styled.PositionsContainer>
              <Styled.PositionHeader>Top 3 Positions for Qualifying</Styled.PositionHeader>
              {renderPositions(eventData.report.positions, "Qualifying")}
            </Styled.PositionsContainer>
          </Styled.EventDetails>
        )}
      </Styled.Container>
    </Styled.Wrapper>
  );
}