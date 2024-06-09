import { MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";

export default function CalculateBikes() {
  const [bikesNumber, setBikesNumber] = useState("");
  const calculate = () => {
    console.log(bikesNumber);
  };

  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <div className="flex flex-col items-end">
        <h1 className="text-2xl font-bold text-center text-primary relative mb-2">
          كم عدد الدراجات النارية اللي ودك تشتري ؟
        </h1>
      </div>
      <div className="flex flex-col items-end">
        <h1 className="text-lg font-light text-center text-primary relative  opacity-80">
          : سعر الشراء يشمل
        </h1>
        <h1 className="text-lg font-light text-center text-primary relative  opacity-80">
          الدراجة النارية 3300 ريال
        </h1>
        <h1 className="text-lg font-light text-center text-primary relative  opacity-80">
          اصدار اللوحات 500 ريال
        </h1>
        <h1 className="text-lg font-light text-center text-primary relative mb-10 opacity-80">
          التأمين سنتين 2150 ريال
        </h1>
      </div>
      <div className="flex flex-col items-end">
        <input
          type="number"
          placeholder="اختر العدد من هنا"
          value={bikesNumber}
          onChange={(e) => setBikesNumber(e.target.value)}
          className="mt-4 mb-5 w-[600px] p-2 rounded-xl text-primary border-solid border-2 border-primary items-end text-right shadow-xl
          placeholder-primary placeholder:opacity-80 placeholder:font-light hover:shadow-2xl transition duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-row-reverse justify-between gap-28 items-center">
        <div className="group">
          <button
            className=" bg-primary text-default p-2 rounded-xl mt-4 w-40 group-hover:bg-default justify-between items-center shadow-xl"
            type="submit"
            onClick={calculate}
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
        <p className="text-primary text-right mt-4">
          كل دراجة نارية تؤجر ب 500 ريال شهريا
        </p>
      </div>
    </div>
  );
}
