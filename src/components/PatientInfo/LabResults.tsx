import { Title } from "../ui";
import { Download } from "lucide-react";
import { usePatientsStore } from "../../hooks/usePatientsStore";

export const LabResults = () => {
  const { activePatient } = usePatientsStore();

  // Manejo seguro de activePatient para evitar errores de "null"
  if (!activePatient || !activePatient.lab_results) {
    return (
      <div className="bg-white rounded-16px pb-2 mt-8">
        <div className="p-4">
          <Title title="Lab Results" />
        </div>
        <div className="px-4 pl-4 mt-5">
          <div>No lab results available for this patient.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-16px pb-2 mt-8">
      <div className="p-4">
        <Title title="Lab Results" />
      </div>
      <div className="px-4 pl-4 mt-5">
        {activePatient.lab_results.map((result, index) => (
          <div
            key={index}
            className="px-4 py-2 flex justify-between items-center mb-2 hover:bg-shadow transition-colors"
          >
            <div>{result}</div>
            <button className="px-2 py-1 rounded">
              <Download />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
