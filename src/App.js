import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import GuestRoute from "./GuestRoute";
import Register from "./Register";
import User from "./ShowUsers";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/User"
          element={
            <ProtectedRoute>
              {" "}
              <User />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <GuestRoute>
              {" "}
              <Login />{" "}
            </GuestRoute>
          }
        />
        <Route path="/register-user" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
