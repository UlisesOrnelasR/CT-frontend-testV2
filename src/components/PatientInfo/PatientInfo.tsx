import { Calendar, PersonStanding, Phone, ShieldCheck } from "lucide-react";
import { usePatientsStore } from "../../hooks/usePatientsStore";
import { Title } from "../ui";
import { formatDateOfBirth } from "../../libs/utils";

export const PatientInfo = () => {
  const { activePatient } = usePatientsStore();

  if (!activePatient || !activePatient.lab_results) {
    return (
      <div className="bg-white rounded-16px pb-2 mt-8">
        <div className="p-4">
          <Title title="Patient Info" />
        </div>
        <div className="px-4 pl-4 mt-5">
          <div>No lab results available for this patient.</div>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-white rounded-16px ">
      <div className="px-4 pb-8 pt-6 flex flex-col justify-center items-center gap-6">
        <div className="mb-4">
          <img
            src={activePatient.profile_picture}
            alt="jessica"
            className="w-[200px] h-[200px]"
          />
        </div>
        <h1 className="font-extrabold text-2xl mb-4">{activePatient.name}</h1>
        <div className=" w-full  flex flex-row items-center justify-start">
          <div className="w-11 h-11 mr-3 bg-shadow rounded-41px flex items-center justify-center">
            <Calendar />
          </div>
          <div className="flex flex-col justify-start items-start">
            <p>Date Of Birth</p>
            <p className="font-bold">
              <p className="font-bold">
                {formatDateOfBirth(activePatient.date_of_birth)}
              </p>
            </p>
          </div>
        </div>
        <div className=" w-full  flex flex-row items-center justify-start">
          <div className="w-11 h-11 mr-3 bg-shadow rounded-41px flex items-center justify-center">
            <PersonStanding />
          </div>
          <div className="flex flex-col justify-start items-start">
            <p>Gender</p>
            <p className="font-bold">{activePatient.gender}</p>
          </div>
        </div>
        <div className=" w-full  flex flex-row items-center justify-start">
          <div className="w-11 h-11 mr-3 bg-shadow rounded-41px flex items-center justify-center">
            <Phone />
          </div>
          <div className="flex flex-col justify-start items-start">
            <p>Contact Info.</p>
            <p className="font-bold">{activePatient.phone_number}</p>
          </div>
        </div>
        <div className=" w-full  flex flex-row items-center justify-start">
          <div className="w-11 h-11 mr-3 bg-shadow rounded-41px flex items-center justify-center">
            <Phone />
          </div>
          <div className="flex flex-col justify-start items-start">
            <p>Emergency Contacts</p>
            <p className="font-bold">{activePatient.emergency_contact}</p>
          </div>
        </div>
        <div className=" w-full  flex flex-row items-center justify-start">
          <div className="w-11 h-11 mr-3 bg-shadow rounded-41px flex items-center justify-center">
            <ShieldCheck />
          </div>
          <div className="flex flex-col justify-start items-start">
            <p>Insurance Provider</p>
            <p className="font-bold">{activePatient.insurance_type}</p>
          </div>
        </div>
        <button className="mt-8 px-10 py-2 cursor-pointer bg-primary rounded-41px font-bold">
          Show All Information
        </button>
      </div>
    </div>
  );
};
