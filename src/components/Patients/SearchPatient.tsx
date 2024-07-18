import { Search } from "lucide-react";
import { SearchPatientItem } from "./SearchPatientItem";
import { Title } from "../ui";
import { usePatientsStore } from "../../hooks/usePatientsStore";

// const data = [
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
//   {
//     name: "Emily Williams",
//     gender: "Female",
//     age: 18,
//     profile_picture: "https://fedskillstest.ct.digital/1.png",
//   },
// ];

export const SearchPatient = () => {
  const { patients } = usePatientsStore();
  return (
    <div className="bg-white rounded-16px pr-1">
      <div className="p-4 flex items-center justify-between">
        <Title title="Patients" />
        <Search />
      </div>
      <div className=" pr-2 mt-9 flex flex-col gap-5 overflow-y-scroll max-h-[900px]">
        {patients.map((patient) => (
          <SearchPatientItem key={patient.name} {...patient} />
        ))}
      </div>
    </div>
  );
};
