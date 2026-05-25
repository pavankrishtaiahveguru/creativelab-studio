import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import hero from "../assets/images/hero.png";
import heroBg from "../assets/images/hero_bg.png";

const Hero = () => {
  const navigate = useNavigate();

  const scrollItems = [
    "BRANDING",
    "CREATIVE DIRECTION",
    "DIGITAL DESIGN",
    "VISUAL STORYTELLING",
    "CONTENT",
    "EXPERIENCES",
    "STRATEGY",
    "DESIGN SYSTEMS",
  ];

  return (
    <section
      id="home"
      className=" relative bg-[#ECE7FF] overflow-hidden flex items-center min-h-screen bg-cover bg-position-[left_15%_center] md:bg-center lg:bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Background Blur */}

      <div className="absolute -top-32 -left-30 w-90 h-90 bg-[#6F00FF]/10 rounded-full blur-[120px]" />

      <div className="absolute -bottom-32 -right-25 w-90 h-90 bg-[#C0FF00]/10 rounded-full blur-[130px]" />

      <div className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center min-h-screen pt-28 lg:pt-24 gap-12 lg:gap-16 pb-36 lg:pb-20">
          {/* LEFT */}

          <div className="max-w-225">
            <p className="text-[#6F00FF] uppercase tracking-[4px] text-xs sm:text-sm mb-6 lg:mb-8 leading-7">
              CREATIVE STUDIO • BRAND STRATEGY • VISUAL EXPERIENCES
            </p>

            <h1 className="font-founders font-bold text-black text-[clamp(2.2rem,7vw,4.2rem)] leading-none tracking-[-0.04em] max-w-187.5">
              We build
              <span className="text-[#6F00FF]"> brands, </span>
              visuals & digital experiences that
              <span className="text-[#6F00FF]"> leave a lasting</span>{" "}
              impression.
            </h1>

            <p className="font-[Nexa] text-[#555555] text-[15px] sm:text-lg leading-8 mt-6 lg:mt-10 max-w-155">
              CreativeLab Studio is a boutique creative agency crafting refined
              identities, immersive websites, and visually powerful brand
              experiences for modern businesses, founders, and visionaries.
            </p>

            <p className="font-[Nexa] text-[#555555] mt-4 text-[15px] sm:text-lg leading-8 max-w-155">
              We blend storytelling, strategy, and aesthetics to create work
              that feels timeless, intentional, and emotionally engaging.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#6F00FF] hover:bg-[#7B68EE] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 duration-300 hover:scale-105 shadow-[0_15px_40px_rgba(111,0,255,0.22)] font-[Nexa] font-semibold cursor-pointer"
              >
                <FaPhoneAlt className="text-sm" />
                Start Your Project
              </button>

              <button
                onClick={() => navigate("/portfolio")}
                className="bg-white hover:bg-[#F5F2FF] text-[#111111] px-10 py-4 rounded-full font-[Nexa] font-semibold border border-transparent hover:border-[#6F00FF] duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(111,0,255,0.25)] cursor-pointer"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* RIGHT */}
          {/* <div className="hidden lg:block">
            <img
              src={hero}
              alt="Hero Background"
              className="w-full h-auto object-cover rounded-[28px] shadow-[0_24px_80px_rgba(111,0,255,0.12)]"
            />
          </div> */}
        </div>
      </div>

      {/* HERO SCROLL TEXT */}

      <div className="absolute bottom-0 left-0 w-full border-y border-[#D9CCFF] bg-white/30 backdrop-blur-xl overflow-hidden pt-2.5 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, repeatIndex) => (
            <div key={repeatIndex} className="flex items-center shrink-0">
              {scrollItems.map((item, index) => (
                <span
                  key={index}
                  className="font-[Founders] text-[#6F00FF] text-sm sm:text-lg lg:text-2xl tracking-[2px] flex items-center px-6 sm:px-10"
                >
                  {item}

                  <span className="ml-8 sm:ml-14">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
