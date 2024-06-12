import React, { useState, useEffect } from "react";
import axios from "axios";
export default function ProfilePage() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:3003/userInfo", {
          headers: {
            Authorization: localStorage.getItem("auth"),
          },
        });
        setUser(data.user);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="container mx-auto w-screen h-screen">
      <div className="flex flex-col items-end justify-center mt-10 ">
        <div className="flex flex-row-reverse text-right gap-2">
          <h1 className="text-3xl font-bold text-right text-primary">مرحبا</h1>
          <h1 className="text-3xl font-bold text-right text-primary">
            {" "}
            {user.name}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-[600px] sm:w-[400px] border-solid border-2 mt-10 border-primary bg-primary rounded-xl">
            <div className="flex flex-col items-end justify-center">
              <div className="flex flex-row-reverse items-center gap-10 w-full  justify-start">
                <h1 className="text-xl font-bold text-default text-right p-2">
                  عدد الدراجات النارية
                </h1>
                <h1 className="text-xl font-bold text-default text-right p-2">
                  {user.numberOfMotorBikes}
                </h1>
              </div>
              <div className="flex flex-row-reverse items-center gap-10 w-full  justify-start">
                <h1 className="text-xl font-bold text-default text-right p-2">
                  عدد العقود
                </h1>
                <h1 className="text-xl font-bold text-default text-right p-2">
                  {user.numberOfMotorBikes}
                </h1>
              </div>
              <div className="flex flex-row-reverse items-center gap-10 w-full  justify-start">
                <h1 className="text-xl font-bold text-default text-right p-2">
                  الايجارات المدفوعة{" "}
                </h1>
                <h1 className="text-xl font-bold text-default text-right p-2">
                  {user.numberOfMotorBikes}
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:w-[600px] sm:w-[400px] border-solid border-2 mt-10 border-primary bg-default rounded-xl">
            <div className="flex flex-col items-end justify-center">
              <div className="flex flex-row-reverse items-center gap-10 w-full  justify-evenly">
                <h1 className="text-xl font-bold text-primary text-right p-2">
                  عدد الدراجات النارية
                </h1>
                <h1 className="text-xl font-bold text-primary text-right p-2">
                  {user.numberOfMotorBikes}
                </h1>
              </div>
              <div className="flex flex-row-reverse items-center gap-10 w-full  justify-evenly">
                <h1 className="text-xl font-bold text-primary text-right p-2">
                  عدد العقود
                </h1>
                <h1 className="text-xl font-bold text-primary text-right p-2">
                  {user.numberOfMotorBikes}
                </h1>
              </div>
              <div className="flex flex-row-reverse items-center gap-10 w-full  justify-evenly">
                <h1 className="text-xl font-bold text-primary text-right p-2">
                  الايجارات المدفوعة{" "}
                </h1>
                <h1 className="text-xl font-bold text-primary text-right p-2">
                  {user.numberOfMotorBikes}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
