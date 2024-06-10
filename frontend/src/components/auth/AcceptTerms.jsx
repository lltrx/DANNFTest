import { MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";

export default function AcceptTerms() {
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
        <h1 className="text-3xl font-bold text-center text-primary relative mb-2">
          الإتفاقية
        </h1>
      </div>
      <div className="flex flex-col items-end mb-4">
        <div
          className="bg-white rounded-xl shadow-md p-4 max-h-80 w-[800px] overflow-y-scroll border-solid border-2 border-primary
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-primary  scrollbar-track-slate-300"
        >
          <p className="text-right text-lg leading-8 opacity-40 font-light">
            بناء على الدلالة التي قدَّمها قولك تم إعداد هذه الإتفاقية ، "نت" انت
            اتفقنا على تمتل بنود الطرف اتفاقية : أنت تمتل وتل أنطباق و اطراف
            تمتل الاتفاقية التالية في اعداد اطراف ان . بكاى راى بما في ذلك
            الاتفاقيات البائع و الطرف ، في قبلها من النصائح طرف ، بالتالي
            الاتفاقيات و الموٕد النصائف البائع اتفاقيات ، عند طرف البائع و
            الاتفاقيات الاخر "نت" ان تمتل البائعة طرف عدد الطرف ، أنت اتفقنا
            موٕد "نت" ان تمتل البائع طرف "نخر" طرف ان اتفقنا البائع عدد و اطراف
            تمتل الاتفاقية التالية في "نت" ان تمتل البائعة طرف عدد الطرف ان .
            بناء على الدلالة التي قدَّمها قولك تم إعداد هذه الإتفاقية ، "نت" انت
            اتفقنا على تمتل بنود الطرف اتفاقية : أنت تمتل وتل أنطباق و اطراف
            تمتل الاتفاقية التالية في اعداد اطراف ان . بناء على الدلالة التي
            قدَّمها قولك تم إعداد هذه الإتفاقية ، "نت" انت اتفقنا على تمتل بنود
            الطرف اتفاقية : أنت تمتل وتل أنطباق و اطراف تمتل الاتفاقية التالية
            في اعداد اطراف ان . بكاى راى بما في ذلك الاتفاقيات البائع و الطرف ،
            في قبلها من النصائح طرف ، بالتالي الاتفاقيات و الموٕد النصائف البائع
            اتفاقيات ، عند طرف البائع و الاتفاقيات الاخر "نت" ان تمتل البائعة
            طرف عدد الطرف ، أنت اتفقنا موٕد "نت" ان تمتل البائع طرف "نخر" طرف ان
            اتفقنا البائع عدد و اطراف تمتل الاتفاقية التالية في "نت" ان تمتل
            البائعة طرف عدد الطرف ان . بناء على الدلالة التي قدَّمها قولك تم
            إعداد هذه الإتفاقية ، "نت" انت اتفقنا على تمتل بنود الطرف اتفاقية :
            أنت تمتل وتل أنطباق و اطراف تمتل الاتفاقية التالية في اعداد اطراف ان
            . بناء على الدلالة التي قدَّمها قولك تم إعداد هذه الإتفاقية ، "نت"
            انت اتفقنا على تمتل بنود الطرف اتفاقية : أنت تمتل وتل أنطباق و اطراف
            تمتل الاتفاقية التالية في اعداد اطراف ان . بكاى راى بما في ذلك
            الاتفاقيات البائع و الطرف ، في قبلها من النصائح طرف ، بالتالي
            الاتفاقيات و الموٕد النصائف البائع اتفاقيات ، عند طرف البائع و
            الاتفاقيات الاخر "نت" ان تمتل البائعة طرف عدد الطرف ، أنت اتفقنا
            موٕد "نت" ان تمتل البائع طرف "نخر" طرف ان اتفقنا البائع عدد و اطراف
            تمتل الاتفاقية التالية في "نت" ان تمتل البائعة طرف عدد الطرف ان .
            بناء على الدلالة التي قدَّمها قولك تم إعداد هذه الإتفاقية ، "نت" انت
            اتفقنا على تمتل بنود الطرف اتفاقية : أنت تمتل وتل أنطباق و اطراف
            تمتل الاتفاقية التالية في اعداد اطراف ان . بناء على الدلالة التي
            قدَّمها قولك تم إعداد هذه الإتفاقية ، "نت" انت اتفقنا على تمتل بنود
            الطرف اتفاقية : أنت تمتل وتل أنطباق و اطراف تمتل الاتفاقية التالية
            في اعداد اطراف ان . بكاى راى بما في ذلك الاتفاقيات البائع و الطرف ،
            في قبلها من النصائح طرف ، بالتالي الاتفاقيات و الموٕد النصائف البائع
            اتفاقيات ، عند طرف البائع و الاتفاقيات الاخر "نت" ان تمتل البائعة
            طرف عدد الطرف ، أنت اتفقنا موٕد "نت" ان تمتل البائع طرف "نخر" طرف ان
            اتفقنا البائع عدد و اطراف تمتل الاتفاقية التالية في "نت" ان تمتل
            البائعة طرف عدد الطرف ان . بناء على الدلالة التي قدَّمها قولك تم
            إعداد هذه الإتفاقية ، "نت" انت اتفقنا على تمتل بنود الطرف اتفاقية :
            أنت تمتل وتل أنطباق و اطراف تمتل الاتفاقية التالية في اعداد اطراف ان
            .
          </p>
        </div>
      </div>
      <div className="inline ">
        <label className="inline-flex items-center justify-end gap-5 mt-4 mb-5 w-[800px] p-2 rounded-xl text-primary border-solid border-2 border-primary shadow-xl hover:shadow-2xl transition duration-500 ease-in-out cursor-pointer">
          <span className="text-primary text-right text-sm ml-4">
            اوافق على بنود الاتفاقية و موتفقني بمثابة توقيع رسمي و معتمد دون
            الحاجة الى توقيع المستند يدويا
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
      <div className="flex flex-row-reverse justify-between gap-20 items-center">
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
        <p className="text-primary text-right mt-4 opacity-90">
          سوف يتم ارسال نسخة موقعة من قبلنا على بريدك الالكتروني بعد انهاءك
          لجميع خطوات التسجيل
        </p>
      </div>
    </div>
  );
}
