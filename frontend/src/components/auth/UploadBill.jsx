import { MdOutlineNavigateNext } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
import { useState } from "react";

export default function UploadBill() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const collectData = () => {
    console.log(isChecked);
  };

  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <div className="flex flex-col items-end">
        <h1 className="text-5xl font-bold text-center text-primary relative mb-10">
          سعيدين بثقتك
        </h1>
      </div>
      <div className="flex flex-col items-end">
        <h1 className="text-2xl font-normal text-center text-primary opacity-95 relative">
          نأمل تحويل المبلغ المستحق 5590 ريال الى الحساب البنكي ل
        </h1>
        <h1 className="text-lg font-light text-center text-primary relative  opacity-80">
          شركة الدراجات النارية المعتمدة
        </h1>
        <h1 className="text-lg font-light text-center text-primary relative  opacity-80">
          مصرف الانماء
        </h1>
        <h1 className="text-lg font-light text-center text-primary relative mb-10 opacity-80">
          SA39500000069452550087
        </h1>
      </div>
      <div className="inline ">
        <label className="inline-flex items-center justify-end gap-5 mt-4 mb-5 w-[600px] p-2 rounded-xl text-primary border-solid border-2 border-primary shadow-xl hover:shadow-2xl transition duration-500 ease-in-out cursor-pointer">
          <span className="text-primary text-right text-sm ml-4">
            ارفق ايصال التحويل هنا
          </span>
          <input
            type="file"
            className="hidden"
            onChange={handleCheckboxChange}
          />
          <FaFileUpload className="inline-block w-6 h-6 rounded-lg  border-primary relative duration-200 ease-in-out" />
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
