import { Title } from "../ui";
import { Rates } from "./Rates";

export const DiagnosisHistory = () => {
  return (
    <div className="mb-7 h-673 bg-white rounded-16px pb-6">
      <div className="p-4">
        <Title title="Diagnostic History" />
      </div>
      <div className="px-4 pl-4 mt-9 w-full">
        <div>graph</div>
        <Rates />
      </div>
    </div>
  );
};
