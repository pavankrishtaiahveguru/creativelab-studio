import { motion } from "framer-motion";

const FloatingTags = () => {
  return (
    <div className="relative w-[320px] h-[240px] flex items-center justify-center">
      {/* Organic Ring */}

      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[170px] h-[145px] border-[7px] border-[#CCCCFF]/50 rounded-[46%] rotate-12"
      />

      {/* Soft Glow */}

      <div className="absolute w-[170px] h-[170px] bg-[#CCCCFF]/10 blur-3xl rounded-full" />

      {/* Strategy */}

      <motion.div
        animate={{
          x: [0, -8, 0, 6, 0],
          y: [0, -6, 0, 4, 0],
          rotate: [-16, -10, -16],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[12px] top-[48px]"
      >
        <div className="bg-[#E9FFDB] border border-[#D8F5C7] px-5 py-2.5 rounded-full shadow-[0_10px_25px_rgba(192,255,0,0.12)]">
          <p className="font-[Nexa] text-[13px] tracking-wide text-[#111111]">
            #strategy
          </p>
        </div>
      </motion.div>

      {/* Brainstorm */}

      <motion.div
        animate={{
          x: [0, 8, 0, -6, 0],
          y: [0, 5, 0, -4, 0],
          rotate: [10, 5, 10],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[5px] top-[62px]"
      >
        <div className="bg-[#FFD700] border border-[#FFE45C] px-5 py-2.5 rounded-full shadow-[0_10px_25px_rgba(255,215,0,0.16)]">
          <p className="font-[Nexa] text-[13px] tracking-wide text-[#111111]">
            #brainstorm
          </p>
        </div>
      </motion.div>

      {/* Creative */}

      <motion.div
        animate={{
          y: [0, -8, 0, 5, 0],
          x: [0, 4, 0, -4, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[22px]"
      >
        <div className="bg-[#6F00FF] border border-[#8D46FF] px-6 py-2.5 rounded-full shadow-[0_12px_30px_rgba(111,0,255,0.28)]">
          <p className="font-[Nexa] text-[13px] tracking-wide text-white">
            #creative
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingTags;