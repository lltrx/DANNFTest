export default function AdminBikesPage({ userStats }) {
  return (
    <div className="flex flex-col w-full items-end justify-center p-20 ">
      <div className="flex flex-col items-end gap-10 mb-20">
        <div className="text-4xl font-bold">
          عدد الدراجات النارية المتاجة للشراء
        </div>
        <h1 className="text-4xl font-bold border-solid border-2 border-primary w-[200px] text-right rounded-2xl pr-5 text-primary">
          {userStats.totalBikes}
        </h1>
      </div>
      <div className="flex flex-col items-end gap-10">
        <h1 className="text-4xl font-bold">
          اجمالي ايحارات الدراجات النارية الشهرية
        </h1>
        <h1 className="text-4xl font-bold border-solid border-2 border-primary w-[200px] text-right rounded-2xl pr-5 text-primary">
          {userStats.totalBikes * 3300}
        </h1>
      </div>
    </div>
  );
}
