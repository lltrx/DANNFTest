import { MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";

export default function VerifyEmail() {
  const [code, setCode] = useState("");
  const verifyCode = () => {
    console.log(code);
  };

  const backToCollectEmail = () => {
    console.log("Redirect to collect email");
  };

  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <div className="flex flex-col items-end">
        <h1 className="text-2xl font-bold text-center  text-primary relative mb-20">
          وصلك كود التحقق على بريدك الالكتروني ؟
        </h1>
      </div>
      <div className="flex flex-col items-end">
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
            className=" bg-primary text-default p-2 rounded-xl mt-4 w-40 group-hover:bg-default justify-between items-center shadow-xl"
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
