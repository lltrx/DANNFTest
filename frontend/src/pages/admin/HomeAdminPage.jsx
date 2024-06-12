import { useState, useEffect } from "react";

export default function HomeAdminPage({ userStats }) {
  return (
    <div className="flex flex-col w-full items-end justify-center p-20 ">
      <div className="flex flex-row items-end gap-10 mb-20">
        <h1 className="text-4xl font-bold ml-10">{userStats.totalUsers}</h1>
        <h1 className="text-4xl font-bold">عدد العملاء المسجلين</h1>
      </div>
      <div className="flex flex-row items-end  mb-20 gap-10">
        <h1 className="text-4xl font-bold ml-10">{userStats.paidUsers}</h1>
        <h1 className="text-4xl font-bold">عدد العملاء الذين اشتروا</h1>
      </div>
      <div className="flex flex-row items-end gap-10 mb-20">
        <h1 className="text-4xl font-bold ml-10">{userStats.totalBikes}</h1>
        <h1 className="text-4xl font-bold">عدد الدراجات النارية</h1>
      </div>
      <div className="flex flex-row items-end gap-10">
        <h1 className="text-4xl font-bold ml-10">{userStats.totalAmount}</h1>
        <h1 className="text-4xl font-bold">اجمالي قيمة الدراجات النارية</h1>
      </div>
    </div>
  );
}
