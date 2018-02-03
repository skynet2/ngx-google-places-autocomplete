export interface OpeningHours {
    open_now: boolean;
    periods: OpeningPeriod[];
    weekday_text: string[];
}

export interface OpeningPeriod {
    open: OpeningHoursTime;
    close?: OpeningHoursTime;
}

export interface OpeningHoursTime {
    day: number;
    hours: number;
    minutes: number;
    nextDate: number;
    time: string;
}