export interface RaceStatus {
    id: string;
    state: string;
    detail: string;
  }
  
  export interface RaceEvent {
    startDate: string;
    endDate: string;
    featuredAthletes: string;
    status: RaceStatus;
    completed: boolean;
    gPrx: string; // Grand Prix name
    crct: string; // Circuit name
    evLink: string; // Event link
    isPostponedOrCanceled: boolean;
    winner: string;
  }
  
  export interface RaceSchedule {
    [date: string]: RaceEvent[]; // Keyed by date (YYYYMMDD), each containing an array of RaceEvent
  }