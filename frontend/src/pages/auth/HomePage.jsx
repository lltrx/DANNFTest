import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-end justify-center min-h-screen bg-white px-4">
      <motion.h1
        className="text-2xl font-bold text-black mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        اهلا و سهلا
      </motion.h1>
      <motion.div
        className="flex flex-col bg-primary/95 rounded-lg p-6 text-white h-[400px] w-[400px] relative shadow-xl hover:shadow-2xl transition duration-500 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold text-center mb-2 text-default relative">
          <span className="relative z-30">بكل بساطة</span>
          <span className="absolute z-20 top-1/2 left-1/2 transform -translate-x-[80px] -translate-y-[-40px] w-[150px] h-[30px] bg-primary rotate-90 rounded-lg"></span>
        </h1>
        <h2 className="text-2xl font-bold text-center text-default relative">
          <span className="relative z-20">اشتر دباب و أجره</span>
          <span className="absolute z-10 top-1/2 left-1/2 transform -translate-x-[60px] -translate-y-[-2px] w-[150px] h-[30px] bg-secondary -rotate-75 rounded-lg shadow-md"></span>
        </h2>
        <p className="text-lg font-bold text-center mt-4 z-30 text-default">
          من خلالنا
        </p>
        <p className="text-lg font-bold text-center  z-30 text-default">
          على شركات معتمدة
        </p>
        <div className="flex justify-center mt-10 flex-row">
          <Link
            to="/signup"
            className="bg-secondary  px-4 py-2 rounded-lg text-default shadow-xl hover:text-primary hover:bg-default transition duration-500 ease-in-out"
          >
            سجل الان
          </Link>
          <Link
            to="/login"
            className="bg-secondary  px-4 py-2 rounded-lg ml-4 text-default shadow-xl hover:text-primary hover:bg-default transition duration-500 ease-in-out"
          >
            سجل الدخول
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
