"use client";

import * as Styled from './yearRangeDropdown.style';

export function YearRangeDropdown({
    year,
    setYear,
    startYear = 1950,
}: {
    year: string;
    setYear: (year: string) => void;
    startYear?: number;
}) {
    const endYear = 2014;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(event.target.value);
    };

    return (
        <Styled.YearRangeWrapper>
            <Styled.Label htmlFor="year">Select a Year:</Styled.Label>
            <Styled.Select id="year" value={year} onChange={handleChange}>
                {Array.from({ length: endYear - startYear + 1 }, (_, i) => (
                    <option key={i} value={(startYear + i).toString()}>
                        {startYear + i}
                    </option>
                ))}
            </Styled.Select>
        </Styled.YearRangeWrapper>
    );
}