import { Title } from "../ui";
import { BloodPressureGraph } from "./BloodPressureGraph";
import { Rates } from "./Rates";

export const DiagnosisHistory = () => {
  return (
    <div className="mb-7 bg-white rounded-16px pb-6">
      <div className="p-4">
        <Title title="Diagnostic History" />
      </div>
      <div className="px-4 pl-4 mt-9 w-full">
        <BloodPressureGraph />
        <Rates />
      </div>
    </div>
  );
};
