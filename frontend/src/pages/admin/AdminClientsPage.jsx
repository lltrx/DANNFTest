import React, { useState } from "react";

export default function AdminClientsPage({ clients }) {
  const [searchQuery, setSearchQuery] = useState("");
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const getRegistrationStepText = (step) => {
    switch (step) {
      case 1:
        return "الاولى";
      case 2:
        return "الثانية";
      case 3:
        return (
          <>
            <span className="text-green-500">مكتمل</span>
            <svg
              className="inline-block w-4 h-4 ml-1 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </>
        );
      default:
        return "";
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col gap-2 items-end right-0">
        <div className="flex flex-row items-center gap-10">
          <input
            type="text"
            placeholder="ابحث بالعملاء"
            className="w-[300px] border-solid border-2 rounded-3xl text-right p-2 border-primary text-primary shadow-xl placeholder:text-xl placeholder:mr-2"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-col gap-10 w-[1300px] h-[700px] border-solid border-2 rounded-2xl overflow-y-auto">
          <div className="flex flex-row-reverse gap-10 justify-evenly mt-2">
            <div className="w-[200px] text-right">
              <h1 className="text-2xl text-black/50">اسم العميل</h1>
            </div>
            <div className="flex flex-row">
              <h1 className="text-2xl text-black/50">الخطوات</h1>
            </div>
            <h1 className="text-2xl text-black/50">عدد الدراجات</h1>
            <h1 className="text-2xl text-black/50">تاريخ التسجيل</h1>
          </div>
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="flex flex-row-reverse gap-10 justify-evenly"
            >
              <div className="border-solid border-2 border-black/50 p-2 rounded-2xl w-[200px] justify-end">
                <h1 className="text-xl text-black/50 text-right">
                  {client.name}
                </h1>
              </div>
              <div className="flex flex-row items-center">
                <h1 className="text-xl text-black/50">
                  {getRegistrationStepText(client.registrationStep)}
                </h1>
              </div>
              <h1 className="text-xl text-black/50">
                {client.numberOfMotorBikes > 0
                  ? client.numberOfMotorBikes
                  : "-"}
              </h1>
              <h1 className="text-xl text-black/50">
                {formatDate(client.registrationDate)}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
