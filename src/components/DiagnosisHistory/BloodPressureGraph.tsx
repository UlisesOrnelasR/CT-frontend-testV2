import { useState } from "react";
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

const diagnosisHistory = [
  {
    month: "March",
    year: 2024,
    blood_pressure: {
      systolic: {
        value: 160,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 78,
        levels: "Lower than Average",
      },
    },
  },
  {
    month: "February",
    year: 2024,
    blood_pressure: {
      systolic: {
        value: 119,
        levels: "Normal",
      },
      diastolic: {
        value: 73,
        levels: "Lower than Average",
      },
    },
  },
  {
    month: "January",
    year: 2024,
    blood_pressure: {
      systolic: {
        value: 128,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 86,
        levels: "Lower than Average",
      },
    },
  },
  {
    month: "December",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 91,
        levels: "Normal",
      },
      diastolic: {
        value: 111,
        levels: "Normal",
      },
    },
  },
  {
    month: "November",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 173,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 103,
        levels: "Normal",
      },
    },
  },
  {
    month: "October",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 125,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 103,
        levels: "Normal",
      },
    },
  },
  {
    month: "September",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 123,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 113,
        levels: "Normal",
      },
    },
  },
  {
    month: "August",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 137,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 112,
        levels: "Normal",
      },
    },
  },
  {
    month: "July",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 148,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 87,
        levels: "Lower than Average",
      },
    },
  },
  {
    month: "June",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 102,
        levels: "Normal",
      },
      diastolic: {
        value: 73,
        levels: "Lower than Average",
      },
    },
  },
  {
    month: "May",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 98,
        levels: "Normal",
      },
      diastolic: {
        value: 115,
        levels: "Normal",
      },
    },
  },
  {
    month: "April",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 130,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 108,
        levels: "Normal",
      },
    },
  },
  {
    month: "March",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 129,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 101,
        levels: "Normal",
      },
    },
  },
  {
    month: "February",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 173,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 69,
        levels: "Lower than Average",
      },
    },
  },
  {
    month: "January",
    year: 2023,
    blood_pressure: {
      systolic: {
        value: 159,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 96,
        levels: "Normal",
      },
    },
  },
  {
    month: "December",
    year: 2022,
    blood_pressure: {
      systolic: {
        value: 139,
        levels: "Higher than Average",
      },
      diastolic: {
        value: 61,
        levels: "Lower than Average",
      },
    },
  },
];

const transformData = (data, timeRange) => {
  const currentDate = new Date();
  const filteredData = data.filter((entry) => {
    const entryDate = new Date(`${entry.month} 1, ${entry.year}`);
    const monthsDiff =
      (currentDate.getFullYear() - entryDate.getFullYear()) * 12 +
      (currentDate.getMonth() - entryDate.getMonth());
    return timeRange === "6months" ? monthsDiff <= 6 : monthsDiff <= 12;
  });

  // Invertir el orden de los datos
  const reversedData = filteredData.reverse();

  return reversedData.map((entry) => ({
    monthYear: `${entry.month}, ${entry.year}`, // Modificar para incluir mes y año
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value,
  }));
};

export const BloodPressureGraph = () => {
  const [timeRange, setTimeRange] = useState("6months");

  const data = transformData(diagnosisHistory, timeRange);

  return (
    <div className="mb-5 rounded-xl bg-graph p-5">
      <div className="mb-4 flex flex-row justify-between">
        <div className="font-bold text-xl">Blood Pressure</div>
        <div>
          <select
            id="timeRange"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-graph"
          >
            <option value="6months">Last 6 months</option>
            <option value="1year">Last year</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthYear" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="systolic"
            stroke="#8884d8"
            name="Systolic Blood Pressure"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="diastolic"
            stroke="#82ca9d"
            name="Diastolic Blood Pressure"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
