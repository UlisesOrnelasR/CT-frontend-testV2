import { DiagnosticListTable } from "./DiagnosticListTable";
import { Title } from "../ui";
import { usePatientsStore } from "../../hooks/usePatientsStore";

// const diagnostic_list = [
//   {
//     name: "Hypertension",
//     description: "Chronic high blood pressure",
//     status: "Under Observation",
//   },
//   {
//     name: "Type 2 Diabetes",
//     description: "Insulin resistance and elevated blood sugar",
//     status: "Cured",
//   },
//   {
//     name: "Asthma",
//     description: "Recurrent episodes of bronchial constriction",
//     status: "Inactive",
//   },
//   {
//     name: "Osteoarthritis",
//     description: "Degenerative joint disease",
//     status: "Untreated",
//   },
//   {
//     name: "Asthma",
//     description: "Recurrent episodes of bronchial constriction",
//     status: "Inactive",
//   },
//   {
//     name: "Osteoarthritis",
//     description: "Degenerative joint disease",
//     status: "Untreated",
//   },
//   {
//     name: "Asthma",
//     description: "Recurrent episodes of bronchial constriction",
//     status: "Inactive",
//   },
//   {
//     name: "Osteoarthritis",
//     description: "Degenerative joint disease",
//     status: "Untreated",
//   },
//   {
//     name: "Asthma",
//     description: "Recurrent episodes of bronchial constriction",
//     status: "Inactive",
//   },
//   {
//     name: "Osteoarthritis",
//     description: "Degenerative joint disease",
//     status: "Untreated",
//   },
//   {
//     name: "Asthma",
//     description: "Recurrent episodes of bronchial constriction",
//     status: "Inactive",
//   },
//   {
//     name: "Osteoarthritis",
//     description: "Degenerative joint disease",
//     status: "Untreated",
//   },
//   {
//     name: "Asthma",
//     description: "Recurrent episodes of bronchial constriction",
//     status: "Inactive",
//   },
//   {
//     name: "Osteoarthritis",
//     description: "Degenerative joint disease",
//     status: "Untreated",
//   },
//   {
//     name: "Asthma",
//     description: "Recurrent episodes of bronchial constriction",
//     status: "Inactive",
//   },
//   {
//     name: "Osteoarthritis",
//     description: "Degenerative joint disease",
//     status: "Untreated",
//   },
//   {
//     name: "Asthma",
//     description: "Recurrent episodes of bronchial constriction",
//     status: "Inactive",
//   },
//   {
//     name: "Osteoarthritis",
//     description: "Degenerative joint disease",
//     status: "Untreated",
//   },
//   {
//     name: "Asthma",
//     description: "Recurrent episodes of bronchial constriction",
//     status: "Inactive",
//   },
//   {
//     name: "Osteoarthritis",
//     description: "Degenerative joint disease",
//     status: "Untreated",
//   },
// ];

export const DiagnosticList = () => {
  const { activePatient } = usePatientsStore();

  if (!activePatient) {
    return (
      <div className="bg-white rounded-16px pb-6">
        <div className="p-4">
          <Title title="Diagnostic List" />
        </div>
        <div className="px-4 pl-4 mt-9">
          <div>No diagnostic list available for this patient.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-16px pb-6">
      <div className="p-4">
        <Title title="Diagnostic List" />
      </div>
      <div className="px-4 pl-4 mt-9">
        <div>
          <DiagnosticListTable
            diagnostic_list={activePatient.diagnostic_list}
          />
        </div>
      </div>
    </div>
  );
};
