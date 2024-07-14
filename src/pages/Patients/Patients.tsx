import { SearchPatient } from "../../components/Patients";

export const Patients = () => {
  return (
    <div className="h-1054 mt-8 gap-4 grid grid-cols-12 items-center justify-center">
      <div className="col-span-3 cursor-pointer p-4">
        <SearchPatient />
      </div>
      <div className="col-span-6 p-4">
        <div>Diagnosis History</div>
        <div>Diagnostic List</div>
      </div>
      <div className="col-span-3">Jessica Taylor</div>
    </div>
  );
};
