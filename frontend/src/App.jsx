import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  LoginPage,
  ProfilePage,
  SignupPage,
} from "./pages/";
import { Private } from "./utils";

function App() {
  return (
    <div className="flex flex-col items-center">
      <BrowserRouter>
        <Routes>
          <Route element={<Private />}>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
