"use client";


import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = (Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow h-[300px] w-full"
    />
  );
}
