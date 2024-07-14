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
    <div className="bg-white rounded-16px pr-1 pb-6">
      <div className="p-4 flex items-center justify-between">
        <p className="text-2xl font-extrabold text">Patients</p>
        <Search />
      </div>
      <div className="px-4 pl-4 mt-9 flex flex-col gap-7 overflow-y-scroll max-h-1054">
        {data.map((patient) => (
          <SearchPatientItem key={patient.name} {...patient} />
        ))}
      </div>
    </div>
  );
};
