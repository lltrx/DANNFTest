import { Navigate, Outlet } from "react-router-dom";

export default function Private() {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <>
          <Navigate to="/login" />
          <Navigate to="/signup" />
        </>
      )}
    </>
  );
}
