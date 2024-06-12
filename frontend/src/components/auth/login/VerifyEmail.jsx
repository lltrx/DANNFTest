import { MdOutlineNavigateNext } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const verifyCode = () => {
    axios
      .post("http://localhost:3003/verify-login", { email, code })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("auth", response.data.auth);
        localStorage.removeItem("email");
        navigate("/landing");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <div className="flex flex-col items-end">
        <h1 className="text-2xl font-bold text-center text-primary relative mb-2">
          وصلك كود التحقق على بريدك الالكتروني ؟
        </h1>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-primary text-right mb-2">
          {email} : تم إرسال كود التحقق إلى
        </p>
        <input
          type="string"
          placeholder="ادخل كود التحقق"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="mt-4 mb-5 w-[600px] p-2 rounded-xl text-primary border-solid border-2 border-primary items-end text-right shadow-xl
          placeholder-primary placeholder:opacity-80 placeholder:font-light hover:shadow-2xl transition duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-row-reverse justify-between gap-40 items-center">
        <div className="group">
          <button
            className="bg-primary text-default p-2 rounded-xl mt-4 w-40 group-hover:bg-default justify-between items-center shadow-xl"
            type="submit"
            onClick={verifyCode}
          >
            <MdOutlineNavigateNext
              className="inline text-default rotate-180 font-extrabold group-hover:text-primary"
              size={20}
            />
            <p className="inline text-default font-extrabold group-hover:text-primary">
              التالي
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
