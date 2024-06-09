import { MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";

export default function CollectPhoneNumber() {
  const [number, setNumber] = useState("");

  const collectNumber = () => {
    console.log(number);
  };

  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <div className="flex flex-col items-end">
        <h1 className="text-2xl font-bold text-center  text-primary relative mb-20">
          نحتاج رقم جوالك
        </h1>
      </div>
      <div className="flex flex-col items-end">
        <input
          type="string"
          placeholder="ادخل رقم جوالك"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="mt-4 mb-5 w-[600px] p-2 rounded-xl text-primary border-solid border-2 border-primary items-end text-right shadow-xl
          placeholder-primary placeholder:opacity-80 placeholder:font-light hover:shadow-2xl transition duration-500 ease-in-out"
        />
      </div>
      <div className="group flex flex-row">
        <button
          className=" bg-primary text-default p-2 rounded-xl mt-4 w-40 group-hover:bg-default justify-between items-center shadow-xl"
          type="submit"
          onClick={collectNumber}
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
  );
}
