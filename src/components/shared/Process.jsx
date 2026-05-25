import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  RiLightbulbFlashLine,
  RiDraftLine,
  RiRocketLine,
  RiLineChartLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

import ParallaxImage from "../ParallaxImage";

const process = [
  {
    id: 1,
    number: "01",
    title: "Discovery & Ideation",
    icon: RiLightbulbFlashLine,
    desc: "Understand goals and brainstorm premium ideas.",
  },
  {
    id: 2,
    number: "02",
    title: "Concept Development",
    icon: RiDraftLine,
    desc: "Transform ideas into detailed creative systems.",
  },
  {
    id: 3,
    number: "03",
    title: "Production & Execution",
    icon: RiRocketLine,
    desc: "Craft immersive premium digital experiences.",
  },
  {
    id: 4,
    number: "04",
    title: "Launch & Evaluation",
    icon: RiLineChartLine,
    desc: "Deliver polished results and optimize growth.",
  },
];

export default function Process() {
  const [current, setCurrent] = useState(0);

  const sliderRef = useRef(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % process.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + process.length) % process.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 4500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden py-28 bg-[#0D071A]">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
        alt="Background"
      />

      <div className="absolute inset-0 bg-[#0D071A]/65" />

      <div className="absolute inset-0 bg-linear-to-b from-[#0D071A]/10 to-[#0D071A]/20" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#8B5CF6] text-5xl md:text-6xl font-light">
            Our Process
          </h2>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            ref={sliderRef}
            animate={{
              x:
                window.innerWidth < 768
                  ? `${-current * 100}%`
                  : `${-current * 33.5}%`,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-6"
          >
            {process.map((item, index) => {
              const Icon = item.icon;

              const active = current === index;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="shrink-0 w-full md:w-[calc(33.33%-16px)] rounded-[28px] backdrop-blur-xl border border-[rgba(139,92,246,.18)] bg-[rgba(18,10,35,.58)] p-8 shadow-[0_25px_80px_rgba(139,92,246,.12)]"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={` w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-500
                    ${
                      active
                        ? "border-[#8B5CF6] bg-[#8B5CF6]/10 shadow-[0_0_35px_rgba(139,92,246,.25)]"
                        : "border-white/15"
                    }
                    `}
                    >
                      <Icon size={28} color={active ? "#8B5CF6" : "#F8F7FF"} />
                    </div>

                    <div className="text-[#F8F7FF]/15 text-5xl font-light">
                      {item.number}
                    </div>
                  </div>

                  <h3 className="mt-8 text-2xl text-[#F8F7FF]">{item.title}</h3>

                  <p className="mt-4 leading-8 text-[rgba(248,247,255,.68)]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex items-center gap-4 mt-14">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/10 text-[#F8F7FF] flex items-center justify-center hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition"
          >
            <RiArrowLeftSLine size={22} />
          </button>

          <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              animate={{
                width: `${((current + 1) / process.length) * 100}%`,
              }}
              transition={{
                duration: 0.7,
              }}
              className="h-full bg-[#8B5CF6] rounded-full shadow-[0_0_18px_rgba(139,92,246,.45)]"
            />
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/10 text-[#F8F7FF] flex items-center justify-center hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition"
          >
            <RiArrowRightSLine size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
