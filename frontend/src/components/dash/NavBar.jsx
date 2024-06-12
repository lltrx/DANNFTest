import React, { useState } from "react";

export default function NavBar({ onSectionChange, selectedSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSectionClick = (section) => {
    onSectionChange(section);
  };

  const isActiveSection = (section) => {
    return selectedSection === section;
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          className={` ${
            isMenuOpen ? "text-default" : "text-black"
          } text-sm p-2.5`}
          type="button"
          onClick={handleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="  bg-black h-full rounded-lg">
          <div className="flex flex-col items-center justify-center gap-5 p-2">
            <div
              className={`flex items-center justify-center mt-20 w-full px-3 py-2.5 rounded-3xl cursor-pointer ${
                isActiveSection("home")
                  ? "bg-primary text-default"
                  : "bg-default text-black"
              }`}
              onClick={() => handleSectionClick("home")}
            >
              الرئيسية
            </div>
            <div
              className={`flex items-center justify-center w-full px-3 py-2.5 rounded-3xl cursor-pointer ${
                isActiveSection("clients")
                  ? "bg-primary text-default"
                  : "bg-default text-black"
              }`}
              onClick={() => handleSectionClick("clients")}
            >
              العملاء
            </div>
            <div
              className={`flex items-center justify-center w-full px-3 py-2.5 rounded-3xl cursor-pointer ${
                isActiveSection("bikes")
                  ? "bg-primary text-default"
                  : "bg-default text-black"
              }`}
              onClick={() => handleSectionClick("bikes")}
            >
              الدراجات النارية
            </div>
            <div
              className={`flex items-center justify-center w-full px-3 py-2.5 rounded-3xl cursor-pointer ${
                isActiveSection("settings")
                  ? "bg-primary text-default"
                  : "bg-default text-black"
              }`}
              onClick={() => handleSectionClick("settings")}
            >
              اعدادات
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
