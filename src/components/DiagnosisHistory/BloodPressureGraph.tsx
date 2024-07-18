import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { usePatientsStore } from "../../hooks/usePatientsStore";
import { BloodPressureData } from "../../models/patients";
import { getAssetUrl } from "../../libs/utils";

const monthAbbreviations: { [key: string]: string } = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

const transformData = (data: BloodPressureData[], timeRange: string) => {
  const currentDate = new Date();
  const filteredData = data.filter((entry) => {
    const entryDate = new Date(`${entry.month} 1, ${entry.year}`);
    const monthsDiff =
      (currentDate.getFullYear() - entryDate.getFullYear()) * 12 +
      (currentDate.getMonth() - entryDate.getMonth());
    return timeRange === "6months" ? monthsDiff <= 6 : monthsDiff <= 12;
  });

  const reversedData = filteredData.reverse();

  return reversedData.map((entry) => ({
    monthYear: `${monthAbbreviations[entry.month]}, ${entry.year}`,
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value,
  }));
};

export const BloodPressureGraph: React.FC = () => {
  const { activePatient } = usePatientsStore();

  const [timeRange, setTimeRange] = useState("6months");
  const data = activePatient
    ? transformData(activePatient.diagnosis_history, timeRange)
    : [];
  const { systolicAverage, diastolicAverage } = calculateAverages(data);

  if (!activePatient) {
    return null; // Or handle loading state or error state as needed
  }

  return (
    <div className="mb-5 rounded-xl bg-graph p-5">
      <div className="mb-4 flex flex-row justify-between items-center">
        <div className="font-bold text-xl">Blood Pressure</div>
        <div>
          <select
            id="timeRange"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-graph"
          >
            <option value="1year">Last year</option>
            <option value="6months">Last 6 months</option>
          </select>
        </div>
      </div>
      <div style={{ width: "100%", height: 210 }}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 200, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="monthYear" />
            <YAxis ticks={[60, 80, 100, 120, 140, 160, 180]} />
            <Tooltip />
            <Legend
              wrapperStyle={{
                right: 0,
                left: "auto",
                position: "absolute",
                top: 0,
                textAlign: "right",
              }}
              content={
                <LegendContent
                  systolicAverage={systolicAverage}
                  diastolicAverage={diastolicAverage}
                />
              }
            />
            <Line
              type="monotone"
              dataKey="systolic"
              stroke="#C26EB4"
              name={`Systolic (Avg: ${systolicAverage.toFixed(2)})`}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="#7E6CAB"
              name={`Diastolic (Avg: ${diastolicAverage.toFixed(2)})`}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const calculateAverages = (data: { systolic: number; diastolic: number }[]) => {
  const systolicSum = data.reduce((acc, entry) => acc + entry.systolic, 0);
  const diastolicSum = data.reduce((acc, entry) => acc + entry.diastolic, 0);
  const systolicAverage = systolicSum / data.length;
  const diastolicAverage = diastolicSum / data.length;
  return { systolicAverage, diastolicAverage };
};

interface LegendContentProps {
  systolicAverage: number;
  diastolicAverage: number;
}

const LegendContent: React.FC<LegendContentProps> = ({
  systolicAverage,
  diastolicAverage,
}) => (
  <div className="legend-container">
    <div className="legend-item flex flex-col gap-1">
      <div className="legend-color" style={{ backgroundColor: "#C26EB4" }} />
      <p className="font-bold flex justify-end items-center">
        <div
          className="h-3 w-3 rounded-full mr-2"
          style={{ backgroundColor: "#E66FD2" }}
        ></div>
        Systolic
      </p>
      <div className="legend-label font-bold text-xl">{`
       ${systolicAverage.toFixed(0)}`}</div>
      <div className="flex flex-row items-center justify-end">
        <img
          src={getAssetUrl("assets/images/ArrowUp.png")}
          alt="ArrowUp"
          className="w-3 h-2 mr-3"
        />
        <p>Lower than Average</p>
      </div>
    </div>
    <div className="legend-item flex flex-col gap-1 mt-7">
      <div className="legend-color" style={{ backgroundColor: "#C26EB4" }} />
      <p className="font-bold flex justify-end items-center">
        <div
          className="h-3 w-3 rounded-full mr-2"
          style={{ backgroundColor: "#8C6FE6" }}
        ></div>
        Diastolic
      </p>
      <div className="legend-label font-bold text-xl">{`
       ${diastolicAverage.toFixed(0)}`}</div>
      <div className="flex flex-row items-center justify-end">
        <img
          src={getAssetUrl("assets/images/ArrowDown.png")}
          alt="ArrowDown"
          className="w-3 h-2 mr-3"
        />
        <p>Lower than Average</p>
      </div>
    </div>
  </div>
);

export default BloodPressureGraph;
