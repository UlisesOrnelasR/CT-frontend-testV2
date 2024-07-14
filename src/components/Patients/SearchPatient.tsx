import { Search } from "lucide-react";
import { SearchPatientItem } from "./SearchPatientItem";

const data = [
  {
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    profile_picture: "https://fedskillstest.ct.digital/1.png",
  },
  {
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    profile_picture: "https://fedskillstest.ct.digital/1.png",
  },
  {
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    profile_picture: "https://fedskillstest.ct.digital/1.png",
  },
  {
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    profile_picture: "https://fedskillstest.ct.digital/1.png",
  },
];

export const SearchPatient = () => {
  return (
    <div className="bg-white rounded-16px p-4">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-extrabold">Patients</p>
        <Search />
      </div>
      <div className="mt-9 flex flex-col gap-7">
        {data.map((patient) => (
          <SearchPatientItem key={patient.name} {...patient} />
        ))}
      </div>
    </div>
  );
};
