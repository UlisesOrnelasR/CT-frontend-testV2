import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { Patient, UsePatientsStoreHook } from "../models/patients";
import {
  onSetActivePatient,
  onLoadPatients,
} from "../store/patients/patientsSlice";
import { cApi } from "../components/api";

export const usePatientsStore = (): UsePatientsStoreHook => {
  const dispatch = useDispatch();
  const { patients, activePatient } = useSelector(
    (state: RootState) => state.patients
  );

  const setActivePatient = (patient: Patient | null) => {
    dispatch(onSetActivePatient(patient));
  };

  const loadingPatients = async () => {
    try {
      const response = await cApi.get("");
      const { data } = response;

      dispatch(onLoadPatients(data));

      const foundPatient = data.find(
        (patient: Patient) => patient.name === "Jessica Taylor"
      );

      if (foundPatient) {
        setActivePatient(foundPatient);
      } else {
        alert("Patient not found: Jessica Taylor");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    patients,
    activePatient,
    setActivePatient,
    loadingPatients,
  };
};
