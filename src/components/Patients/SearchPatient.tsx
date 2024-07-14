import { Search } from "lucide-react";

export const SearchPatient = () => {
  return (
    <div className="bg-white rounded-16px">
      <div>
        <p className="text-2xl font-extrabold">Patients</p>
        <Search />
      </div>
      <div className="flex flex-col">
        <div>Emily</div>
        <div>Jessica</div>
      </div>
    </div>
  );
};
