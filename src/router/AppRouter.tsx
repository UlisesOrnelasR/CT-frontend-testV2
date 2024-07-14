import { Routes, Route, Navigate } from "react-router-dom";
import { Patients } from "../pages/Patients";
import { Layout } from "../components";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Patients />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
