import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";

export default function AppProviders() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}