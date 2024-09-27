"use client ";
import Calender from "@/components/Card/Calender";
import General from "@/components/Card/General";
import Line from "@/components/Card/Line";
import LineChart from "@/components/Card/LineChart";
import { CalendarDemo } from "./../components/Card/CalenderDemo";

const page = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mb-1 mt-2 gap-1">
        <General />

        <div className="flex flex-col">
          <div className="h-full mb-1">
            <Calender />
          </div>
          <div className="h-full m-0">
            <Calender />
          </div>
        </div>
      </div>
      <div className="flex justify-between lg:flex-row flex-col gap-2 items-start">
        <div className="flex items-center justify-center h-[300px] w-full">
          <Line />
        </div>
        <div className="flex items-center w-full justify-center h-[300px]">
          <CalendarDemo />
        </div>
        <div className="h-[300px] w-full border rounded-lg flex items-center justify-center">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default page;
