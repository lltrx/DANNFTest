import { MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";

export default function VerifyRent({ onNext }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const collectData = () => {
    localStorage.setItem("WantsToRent", isChecked);
    onNext();
  };

  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <div className="flex flex-col items-end">
        <h1 className="text-2xl font-bold text-center text-primary relative mb-2">
          ودك نأجرهم على شركة وحدة او نوزعهم على شركات متعددة عشان نقلل المخاطر
          ؟
        </h1>
      </div>
      <div className="flex flex-col items-end">
        <h1 className="text-lg font-light text-center text-primary relative mb-10 opacity-80">
          دائما ننصح بتوزيع الدراجات النارية على عدة شركات لتقليل المخاطر
        </h1>
      </div>
      <div className="inline ">
        <label className="inline-flex items-center justify-end gap-5 mt-4 mb-5 w-[600px] p-2 rounded-xl text-primary border-solid border-2 border-primary shadow-xl hover:shadow-2xl transition duration-500 ease-in-out cursor-pointer">
          <span className="text-primary text-right text-sm ml-4">
            نعم ارغب بتأجير الدراجات النارية على شركات متفرقة لتقليل المخاطر
          </span>
          <input
            type="checkbox"
            className="hidden"
            onChange={handleCheckboxChange}
          />
          <span
            className={`inline-block w-6 h-6 rounded-lg border-2 border-primary relative duration-200 ease-in-out ${
              isChecked ? "bg-primary" : ""
            }`}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 transition-opacity duration-500 ease-in-out"></span>
          </span>
        </label>
      </div>
      <div className="flex flex-row-reverse justify-between gap-28 items-center">
        <div className="group">
          <button
            className="bg-primary text-default p-2 rounded-xl mt-4 w-40 group-hover:bg-default justify-between items-center shadow-xl"
            type="submit"
            onClick={collectData}
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
