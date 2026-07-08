import FloatingTags from "../components/shared/FloatingTags";

const Philosophy = () => {
  return (
    <section
      id="philosophy"
      className="relative bg-[#ECE7FF] py-28 overflow-hidden"
    >
      {/* Floating Tags */}

      <div className="hidden xl:block absolute right-[75px] top-1/2 -translate-y-1/2 z-10">
        <FloatingTags />
      </div>

      <div className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-237.5 mx-auto text-center">
          <h2 className="font-[Founders] text-[#6F00FF] text-4xl text-bold sm:text-5xl lg:text-6xl leading-none mb-10">
            Our Philosophy
            <span className="text-[#6F00FF]">.</span>
          </h2>

          <p className="font-[Nexa] text-[#444444] text-xl sm:text-2xl leading-[1.9] max-w-195 mx-auto">
            We believe creativity is more than design, it’s an experience worth
            feeling.
          </p>

          <div className="w-24 h-0.5 bg-[#6F00FF] mx-auto mt-10 mb-10 rounded-full" />

          <p className="font-[Nexa] font-light text-[#555555] text-lg leading-loose max-w-212.5 mx-auto">
            A truly memorable brand is built through clarity, emotional
            connection, and timeless visual language. Our work is designed to
            move beyond trends and create experiences that remain relevant,
            refined, and meaningful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;