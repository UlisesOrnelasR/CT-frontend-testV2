import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: {
        value: number;
        levels: string;
      };
      diastolic: {
        value: number;
        levels: string;
      };
    };
    heart_rate: {
      value: number;
      levels: string;
    };
    respiratory_rate: {
      value: number;
      levels: string;
    };
    temperature: {
      value: number;
      levels: string;
    };
  }[];
  diagnostic_list: {
    name: string;
    description: string;
    status: string;
  }[];
  lab_results: string[];
}

interface PatientsState {
  isLoadingPatients: boolean;
  patients: Patient[];
  activePatient: Patient | null;
}

const initialState: PatientsState = {
  isLoadingPatients: true,
  patients: [],
  activePatient: null,
};

export const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    onSetActivePatient: (state, action: PayloadAction<Patient | null>) => {
      state.activePatient = action.payload;
    },
    onLoadPatients: (state, action: PayloadAction<Patient[]>) => {
      state.isLoadingPatients = false;
      action.payload.forEach((patient) => {
        const exists = state.patients.some((p) => p.name === patient.name);
        if (!exists) {
          state.patients.push(patient);
        }
      });
    },
  },
});

export const { onLoadPatients, onSetActivePatient } = patientsSlice.actions;

export default patientsSlice.reducer;
