import { configureStore } from "@reduxjs/toolkit";
import { patientsSlice } from "./patients/patientsSlice";

export interface RootState {
  patients: ReturnType<typeof patientsSlice.reducer>;
}

export const store = configureStore({
  reducer: {
    patients: patientsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
