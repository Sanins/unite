"use client";

export function YearRangeDropdown({
    year,
    setYear,
}: {
    year: string;
    setYear: (year: string) => void;
}) {
    const startYear = 1950; // when f1 racing began 
    const endYear = 2014; // current season

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(event.target.value);
    };

    return (
        <div>
            <label htmlFor="year">Select a Year:</label>
            <select id="year" value={year} onChange={handleChange}>
                {Array.from({ length: endYear - startYear + 1 }, (_, i) => (
                    <option key={i} value={(startYear + i).toString()}>
                        {startYear + i}
                    </option>
                ))}
            </select>
        </div>
    );
}