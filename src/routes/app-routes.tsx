import { Routes, Route } from "react-router";
import App from "@/App";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};
