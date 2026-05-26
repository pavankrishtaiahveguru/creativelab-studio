import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="bg-[#F8F7F2] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-362.5 mx-auto px-6 lg:px-12">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-262.5 mx-auto text-center"
        >
          <h2 className="font-[Founders] text-[#111111] text-xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em]">
            We create premium brand experiences that turn strategy into
            <span className="text-[#6F00FF]"> elegant visuals</span> and lasting
            recognition.
          </h2>

          <p className="font-[Nexa] text-[#555555] text-lg lg:text-xl leading-[1.9] max-w-237 mx-auto mt-8">
            CreativeLab Studio partners with founders and modern businesses to
            shape brand identities, website experiences, digital marketing
            campaigns, and creative production that feel elevated, intentional,
            and built to endure. Our process blends strategy, storytelling, and
            design so every touchpoint reflects a confident and memorable brand
            presence.
          </p>
        </motion.div>

        {/* Content Grid */}

        <div className="mt-24 grid lg:grid-cols-12 gap-6">
          {/* Main Image */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="overflow-hidden w-223 rounded-3xl border border-[#D7D7D7]">
              <img
                src="https://res.cloudinary.com/dcnmzhp9k/image/upload/v1779810372/sweet-life-npQNtKDR21o-unsplash_j5otgr.jpg"
                alt="CreativeLab Studio team crafting premium branding and digital design concepts"
                className="w-full h-135 object-cover"
              />
            </div>
          </motion.div>

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="h-full rounded-3xl border border-[#D7D7D7] bg-white/70 backdrop-blur-sm p-10">
              <h3 className="font-[Founders] text-[#6F00FF] text-4xl mb-6">
                Our Mission
              </h3>

              <p className="font-[Nexa] text-[#555555] leading-loose text-lg">
                Our mission is to shape premium brand experiences through
                strategic creativity, refined visual systems, and meaningful
                storytelling.
                <br />
                We help businesses communicate with clarity, build trust through
                design, and create memorable digital touchpoints that support
                visibility, engagement, and long-term growth.
              </p>
            </div>
          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="h-full rounded-[24px] border border-[#D7D7D7] bg-white/70 backdrop-blur-sm p-10">
              <h3 className="font-[Founders] text-[#6F00FF] text-4xl mb-6">
                Our Vision
              </h3>

              <p className="font-[Nexa] text-[#555555] leading-[2] text-lg">
                We envision CreativeLab Studio as a globally trusted creative
                agency known for premium branding, immersive websites, and
                high-impact digital campaigns.
                <br />
                Our goal is to shape modern brand identities that remain
                elegant, emotionally resonant, and commercially effective in a
                fast-moving digital landscape.
              </p>
            </div>
          </motion.div>

          {/* Team Image */}

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="overflow-hidden rounded-3xl border border-[#D7D7D7]">
              <img
                src="https://res.cloudinary.com/dcnmzhp9k/image/upload/v1779810375/van-tay-media-YK1AJT_5e5Q-unsplash_nb2dia.jpg"
                alt="CreativeLab Studio team working on branding, website design, and motion content"
                className="w-full h-105 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
