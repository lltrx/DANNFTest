import React, { useState } from "react";
import axios from "axios";
export default function AdminSettingsPage({ clients }) {
  const [clientslist, setClientslist] = useState(clients);
  const token = localStorage.getItem("auth");
  const deleteClient = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/users/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      setClientslist((prevClients) =>
        prevClients.filter((client) => client.id !== id)
      );
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  return (
    <div className="flex flex-col w-full items-end justify-center  ">
      <div className="flex flex-row-reverse items-end gap-10 mb-20">
        <div className="w-[200px] border-solid border-2 border-primary bg-primary rounded-xl">
          <h1 className="text-xl font-bold text-default text-right p-2">
            المستخدمين
          </h1>
        </div>
        <div className="w-[200px] border-solid border-2 border-primary  rounded-xl">
          <h1 className="text-xl font-bold text-primary text-right p-2">
            نص الاتفاقية
          </h1>
        </div>
        <div className="w-[200px] border-solid border-2 border-primary  rounded-xl">
          <h1 className="text-xl font-bold text-primary text-right p-2">
            اعتماد ايصال التحويل
          </h1>
        </div>
        <div className="w-[200px] border-solid border-2 border-primary  rounded-xl">
          <h1 className="text-xl font-bold text-primary text-right p-2">
            اعدادات عامة
          </h1>
        </div>
      </div>
      <div className="flex flex-col  w-[1200px]">
        <div className="flex flex-row-reverse items-end gap-10 justify-evenly">
          <h1 className="text-xl  text-black/50">المستخدم</h1>
          <h1 className="text-xl  text-black/50">البريد الالكتروني</h1>
          <h1 className="text-xl  text-black/50">صلاحية الدخول</h1>
        </div>
        {clientslist.map((client) => (
          <div
            key={client._id}
            className="flex flex-row-reverse items-end gap-10 justify-between"
          >
            <h1 className="text-xl  text-black">{client.name}</h1>
            <h1 className="text-xl  text-black">{client.email}</h1>
            <h1 className="text-xl  text-black">{client.role}</h1>
            <button
              onClick={() => deleteClient(client._id)}
              className="bg-red-500 text-danger px-2 py-1 rounded-lg"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
