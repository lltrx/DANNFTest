import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "./pages/auth/";
import { AdminPage } from "./pages/admin";
import { ProfilePage } from "./pages/user";
import { Private, Admin } from "./utils";

function App() {
  return (
    <div className="flex flex-col items-center">
      <BrowserRouter>
        <Routes>
          <Route element={<Admin />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          <Route element={<Private />}>
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
