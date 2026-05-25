import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft, HiOutlineSparkles } from "react-icons/hi2";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#F8F7FF] overflow-hidden flex items-center justify-center px-6">
      {/* Glow */}

      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#6F00FF]/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-[#CCCCFF] rounded-full blur-[120px]" />

      {/* Floating */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-32 right-[12%] text-[#6F00FF]/20"
      >
        <HiOutlineSparkles className="text-7xl" />
      </motion.div>

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        {/* 404 */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-[Founders] text-[130px] sm:text-[180px] lg:text-[240px] leading-none text-[#6F00FF]"
        >
          404
        </motion.h1>

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-[Founders] text-[#111111] text-4xl sm:text-5xl lg:text-6xl leading-[0.95] mb-6"
        >
          Looks like creativity
          <br />
          took a wrong turn.
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-[Nexa] text-[#666666] text-lg leading-8 max-w-[650px] mx-auto mb-12"
        >
          The page you're looking for doesn't exist, may have been moved, or is
          currently unavailable. Let's get you back to something inspiring.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <button
            onClick={() => navigate("/")}
            className="bg-[#6F00FF] hover:bg-[#875BFF] text-white px-9 py-4 rounded-full font-[Nexa] font-semibold shadow-[0_15px_40px_rgba(111,0,255,0.25)] hover:scale-105 duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <HiArrowLeft />
            Back Home
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="border border-[#DDD6FE] bg-white hover:bg-[#CCCCFF]/20 text-[#111111] px-9 py-4 rounded-full font-[Nexa] font-semibold hover:border-[#6F00FF] duration-300 cursor-pointer"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PageNotFound;
