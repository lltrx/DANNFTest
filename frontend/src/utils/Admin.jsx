import { Navigate, Outlet } from "react-router-dom";

export default function Admin() {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  return (
    <>
      {user.role === "admin" ? (
        <Outlet />
      ) : (
        <>
          <Navigate to="/" />
          <Navigate to="/profile" />
          <Navigate to="/login" />
          <Navigate to="/signup" />
        </>
      )}
    </>
  );
}
