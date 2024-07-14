import { DiagnosticListTable } from "./DiagnosticListTable";
import { Title } from "../ui";

const diagnostic_list = [
  {
    name: "Hypertension",
    description: "Chronic high blood pressure",
    status: "Under Observation",
  },
  {
    name: "Type 2 Diabetes",
    description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Untreated",
  },
  {
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Untreated",
  },
  {
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Untreated",
  },
  {
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Untreated",
  },
  {
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Untreated",
  },
  {
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Untreated",
  },
  {
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Untreated",
  },
  {
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Untreated",
  },
  {
    name: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    name: "Osteoarthritis",
    description: "Degenerative joint disease",
    status: "Untreated",
  },
];

export const DiagnosticList = () => {
  return (
    <div className="bg-white rounded-16px pb-6">
      <div className="p-4">
        <Title title="Diagnostic List" />
      </div>
      <div className="px-4 pl-4 mt-9">
        <div>
          <DiagnosticListTable diagnostic_list={diagnostic_list} />
        </div>
      </div>
    </div>
  );
};
