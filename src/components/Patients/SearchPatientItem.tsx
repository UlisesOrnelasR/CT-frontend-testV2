import { Ellipsis } from "lucide-react";

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
}

export const SearchPatientItem = ({ ...patient }: Patient) => {
  return (
    <div className="pl-5 py-3 flex items-center justify-between hover:bg-secondary transition-colors">
      <div className="flex items-center gap-3">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="text-left">
          <p className="font-bold">{patient.name}</p>
          <p className="text-textSecondary">
            {patient.gender}, {patient.age}
          </p>
        </div>
      </div>
      <div className="cursor-pointer">
        <Ellipsis />
      </div>
    </div>
  );
};
