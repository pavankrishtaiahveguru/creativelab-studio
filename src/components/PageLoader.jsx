import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white px-6 py-8"
    >
      <div className="max-w-[420px] w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-[#6F00FF] bg-[#F9F7FF]"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="80"
              cy="80"
              r="76"
              stroke="#6F00FF"
              strokeWidth="8"
              opacity="0.2"
            />
            <path
              d="M52 92L72 68L87 86L108 60"
              stroke="#6F00FF"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-4 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
        >
          CreativeLab
        </motion.div>

        <motion.div
          className="mx-auto mb-5 h-14 w-14 rounded-full border-4 border-[#E4D7FF] border-t-[#6F00FF]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm leading-6 text-slate-600"
        >
          Loading immersive design and motion experiences...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageLoader;
