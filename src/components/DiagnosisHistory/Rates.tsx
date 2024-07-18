import { usePatientsStore } from "../../hooks/usePatientsStore";
import { useState, useEffect } from "react";

export const Rates = () => {
  const { activePatient } = usePatientsStore();
  const [averageRespiratoryRate, setAverageRespiratoryRate] = useState(0);
  const [averageTemperature, setAverageTemperature] = useState(0);
  const [averageHeartRate, setAverageHeartRate] = useState(0);

  useEffect(() => {
    if (activePatient && activePatient.diagnosis_history) {
      const history = activePatient.diagnosis_history;

      // Calculating averages
      const totalRespiratoryRate = history.reduce(
        (sum, entry) => sum + entry.respiratory_rate.value,
        0
      );
      const totalTemperature = history.reduce(
        (sum, entry) => sum + entry.temperature.value,
        0
      );
      const totalHeartRate = history.reduce(
        (sum, entry) => sum + entry.heart_rate.value,
        0
      );

      const count = history.length;

      setAverageRespiratoryRate(totalRespiratoryRate / count);
      setAverageTemperature(totalTemperature / count);
      setAverageHeartRate(totalHeartRate / count);
    }
  }, [activePatient]);

  return (
    <div className="flex flex-row gap-5">
      <div className="flex-1 bg-respiratory rounded-xl p-4 text-left">
        <img
          src="assets/images/respiratory.png"
          alt="respiratory"
          className="w-24 mb-4"
        />
        <p className="text-lg font-semibold">Respiratory Rate</p>
        <p className="text-3xl font-extrabold mb-4">
          {averageRespiratoryRate.toFixed(1)} bpm
        </p>
        <p>
          <span>Normal</span>
        </p>
      </div>
      <div className="flex-1 bg-temperatureR rounded-xl p-4 text-left">
        <img
          src="assets/images/temperatureR.png"
          alt="respiratory"
          className="w-24 mb-4"
        />
        <p className="text-lg font-semibold">Temperature</p>
        <p className="text-3xl font-extrabold mb-4">
          {averageTemperature.toFixed(1)} °F
        </p>
        <p>
          <span>Normal</span>
        </p>
      </div>
      <div className="flex-1 bg-heart rounded-xl p-4 text-left">
        <img
          src="assets/images/heart.png"
          alt="respiratory"
          className="w-24 mb-4"
        />
        <p className="text-lg font-semibold">Heart Rate</p>
        <p className="text-3xl font-extrabold mb-4">
          {averageHeartRate.toFixed(1)} bpm
        </p>
        <p className="flex items-center">
          <img
            src="assets/images/ArrowDown.png"
            alt="ArrowDown"
            className="mr-3 w-2 h-1.5"
          />
          <span>Lower than Average</span>
        </p>
      </div>
    </div>
  );
};
