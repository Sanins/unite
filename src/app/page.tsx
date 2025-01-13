import { apiClient } from "@/api/ApiClient";
import { Home } from "@/components/home/home";
import { RaceSchedule } from "@/types/schedule.types";

export default async function Page() {
    const year = "2024";
    let initialScheduleData: RaceSchedule | null = null;
    let errorMessage: string | null = null;

    try {
        initialScheduleData = await apiClient("/schedule", { params: { year } });
    } catch (error: unknown) {
        errorMessage = error instanceof Error ? error.message : "An error occurred while fetching data";
    }

    return (
        <Home
            initialYear={year}
            initialScheduleData={initialScheduleData}
            error={errorMessage}
        />
    );
}