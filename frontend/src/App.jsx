import { useState } from "react";
import Login from "./pages/Login";
import Pending from "./pages/Pending";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [state, setState] = useState("login");

  if (state === "login") return <Login onPending={()=>setState("pending")} />;
  if (state === "pending") return <Pending />;
  return <Dashboard />;
}