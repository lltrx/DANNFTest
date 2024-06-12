import { MdOutlineNavigateNext } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";

export default function VerifyEmail({ onNext, onBack }) {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const verifyCode = () => {
    axios
      .post("http://localhost:3003/verify", { email, code })
      .then(() => {
        onNext();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const backToCollectEmail = () => {
    console.log("Redirect to collect email");
    onBack();
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
        <p className="text-primary text-right mt-4 gap-2 opacity-80">
          دخلت بريد الكتروني خاطيء ؟
          <a href="#" className="text-primary mr-1">
            تقدر تعدله{" "}
            <span
              onClick={backToCollectEmail}
              className="text-primary underline underline-offset-4 hover:font-extrabold"
            >
              {" "}
              من هنا
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
