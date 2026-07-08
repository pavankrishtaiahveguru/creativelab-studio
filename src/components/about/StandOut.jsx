import { motion } from "framer-motion";
import FloatingTags from "../shared/FloatingTags";

const StandOut = () => {
  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden relative">
      {/* Floating Tags Top Right */}

      <div className="hidden xl:block absolute right-[60px] top-[140px] z-10">
        <FloatingTags />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section headline */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-16 max-w-[780px]"
        >
          <h2
            className="font-[Founders] text-[#111] leading-[1.05]"
            style={{ fontSize: "clamp(2.4rem,5vw,5rem)" }}
          >
            Creative strategy for brands that want to look premium and perform
            with confidence.
          </h2>
        </motion.div>

        {/* Two-column layout */}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[28px] overflow-hidden aspect-[4/3] bg-[#ECE7FF]">
              <img
                src="https://res.cloudinary.com/dcnmzhp9k/image/upload/v1779942602/WhatsApp_Image_2026-05-28_at_09.56.16_fxvgdb.jpg?q=80&w=1200"
                alt="Creative team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Story Badge */}

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-5 -right-5 bg-[#6F00FF] rounded-[18px] px-5 py-3.5 flex items-center gap-3 shadow-[0_15px_40px_rgba(111,0,255,0.35)] cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="10" height="13" viewBox="0 0 10 13" fill="white">
                  <path d="M1 1.5l8 4.5-8 4.5V1.5z" />
                </svg>
              </div>

              <span className="font-[Nexa] text-white text-xs tracking-[2px] uppercase">
                Watch Our Story
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Label */}

            <p className="font-[Nexa] text-[#6F00FF] text-sm tracking-[5px] uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-[#6F00FF]" />
              About CreativeLab
            </p>

            {/* Text */}

            <p className="font-[Nexa] text-[#555] font-light leading-[2]">
              CreativeLab Studio is a premium creative agency supporting
              branding, brand strategy, website design, creative production, and
              digital marketing for founders and modern businesses. We combine
              strategy, visual storytelling, and refined digital design to
              create brand experiences that feel elegant, memorable, and built
              to perform.
            </p>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 border border-[#ECE7FF] rounded-[22px] overflow-hidden bg-white shadow-[0_10px_40px_rgba(111,0,255,0.04)]">
              <div className="py-7 px-4 text-center border-r border-[#ECE7FF]">
                <h3 className="font-[Founders] text-[#6F00FF] text-5xl mb-2">
                  120+
                </h3>

                <p className="font-[Nexa] text-[#999] text-xs tracking-[2px] uppercase leading-5">
                  Projects Crafted
                </p>
              </div>

              <div className="py-7 px-4 text-center border-r border-[#ECE7FF]">
                <h3 className="font-[Founders] text-[#6F00FF] text-5xl mb-2">
                  45+
                </h3>

                <p className="font-[Nexa] text-[#999] text-xs tracking-[2px] uppercase leading-5">
                  Brands Collaborated
                </p>
              </div>

              <div className="py-7 px-4 text-center">
                <h3 className="font-[Founders] text-[#6F00FF] text-5xl mb-2">
                  5+
                </h3>

                <p className="font-[Nexa] text-[#999] text-xs tracking-[2px] uppercase leading-5">
                  Creative Industries
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StandOut;