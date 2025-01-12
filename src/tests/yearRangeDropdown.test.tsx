import { YearRangeDropdown } from "@/components/yearRangeDropdown/yearRangeDropdown";
import { render, screen, fireEvent } from "@testing-library/react";

describe('YearRangeDropdown Component', () => {
    it('should call setYear when a new year is selected', () => {
        const setYear = jest.fn();
        const year = "2024";

        render(<YearRangeDropdown year={year} setYear={setYear} />);

        const selectElement = screen.getByRole('combobox');

        fireEvent.change(selectElement, { target: { value: "2023" } });

        expect(setYear).toHaveBeenCalled();
    });

    it('should render a list of years starting from startYear to endYear', () => {
        const setYear = jest.fn();
        const year = "2024";

        render(<YearRangeDropdown year={year} setYear={setYear} />);

        const options = screen.getAllByRole('option');
        const years = options.map((option) => option.textContent);

        const expectedYears = Array.from({ length: 2024 - 1950 + 1 }, (_, i) => (1950 + i).toString());
        expect(years).toEqual(expectedYears);
    });
});