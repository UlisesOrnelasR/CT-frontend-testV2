import { useEffect } from "react";
import { DiagnosisHistory } from "../../components/DiagnosisHistory";
import { DiagnosticList } from "../../components/DiagnosticList";
import { LabResults, PatientInfo } from "../../components/PatientInfo";
import { SearchPatient } from "../../components/Patients";
import { usePatientsStore } from "../../hooks/usePatientsStore";

export const Patients = () => {
  const { loadingPatients, patients, activePatient } = usePatientsStore();

  useEffect(() => {
    loadingPatients();
  }, []);

  // Mensaje de carga mientras se espera la respuesta de la API
  if (patients.length === 0 && !activePatient) {
    return <div className="text-center">Loading patients...</div>;
  }

  return (
    <div className="gap-4 grid grid-cols-12 justify-center p-4">
      <div className="col-span-3 cursor-pointer py-4 pr-1 mt-8 bg-white rounded-16px">
        <SearchPatient />
      </div>
      <div className=" col-span-6 mt-8">
        <DiagnosisHistory />
        <DiagnosticList />
      </div>
      <div className=" col-span-3 mt-4">
        <PatientInfo />
        <LabResults />
      </div>
    </div>
  );
};
