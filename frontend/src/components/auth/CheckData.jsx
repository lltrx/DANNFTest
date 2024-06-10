export default function CheckData() {
  const backToCollectEmail = () => {
    console.log("Redirect to collect email");
  };

  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <div className="flex flex-col items-end">
        <h1 className="text-5xl font-bold text-center  text-primary relative mb-10">
          شكرا لك
        </h1>
      </div>
      <div className="flex flex-col items-end">
        <h1 className="text-2xl font-normal text-center text-primary opacity-95 relative">
          جاري التحقق من اتمام خطوات التسجيل
        </h1>
        <h1 className="text-lg font-light text-center text-primary relative mb-20  opacity-80">
          سيتم ابلاغك عبر البريد الالكتروني عند الانتهاء من المراجعة
        </h1>
      </div>
      <div className="flex flex-row-reverse gap-2 items-center">
        <p className="text-primary text-right mt-4 gap-2 opacity-80">
          تستطيع
          <a href="#" className="text-primary mr-1">
            <span
              onClick={backToCollectEmail}
              className="text-primary underline underline-offset-4 hover:font-extrabold"
            >
              {" "}
              تسجيل الدخول
            </span>
          </a>
        </p>
        <p className="text-primary text-right mt-4  opacity-80">
          و الاطلاع على المعلومات بعد التحقق من اتمام خطوات التسجيل
        </p>
      </div>
    </div>
  );
}
