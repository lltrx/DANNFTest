import { MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";

export default function CollectFullNameAndId() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const collectData = () => {
    console.log(name);
    console.log(id);
  };

  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <div className="flex flex-col items-end">
        <h1 className="text-2xl font-bold text-center  text-primary relative mb-20">
          تهمنا البيانات التالية عشان العقد
        </h1>
      </div>
      <div className="flex flex-col items-end">
        <input
          type="name"
          placeholder="اسمك الثلاثي"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-4 mb-2 w-[600px] p-2 rounded-xl text-primary border-solid border-2 border-primary items-end text-right shadow-xl 
          placeholder-primary placeholder:opacity-80 placeholder:font-light hover:shadow-2xl transition duration-500 ease-in-out"
        />
        <input
          type="string"
          placeholder="رقم هويتك"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="mt-4 mb-5 w-[600px] p-2 rounded-xl text-primary border-solid border-2 border-primary items-end text-right shadow-xl
          placeholder-primary placeholder:opacity-80 placeholder:font-light hover:shadow-2xl transition duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-row-reverse justify-between gap-28 items-center">
        <div className="group">
          <button
            className=" bg-primary text-default p-2 rounded-xl mt-4 w-40 group-hover:bg-default justify-between items-center shadow-xl"
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
        <p className="text-primary text-right mt-4 opacity-80">
          سيتم ادراج البيانات اعلاه بالعقد ، الرجاء التأكد من صحتها
        </p>
      </div>
    </div>
  );
}
