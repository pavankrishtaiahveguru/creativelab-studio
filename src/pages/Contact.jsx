import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import WhyChooseUs from "../components/shared/WhyChooseUs";
import Footer from "../components/Footer";
import PageHero from "../components/shared/PageHero";
import DownloadProfileCard from "../components/DownloadProfileCard";

const faqs = [
  {
    question: "What services does CreativeLab Studio offer?",
    answer:
      "We provide branding, UI/UX design, web development, visual storytelling, content creation, creative strategy, and digital experiences.",
  },
  {
    question: "What's your design process like?",
    answer:
      "Our process includes discovery, strategy, visual exploration, design execution, refinement, and final delivery.",
  },
  {
    question: "How much does design work cost?",
    answer:
      "Pricing depends on project scope and requirements. We provide customized quotations.",
  },
  {
    question: "How do you handle feedback?",
    answer:
      "We work collaboratively and include revision cycles for refined outcomes.",
  },
  {
    question: "Can we see previous work?",
    answer: "Absolutely. Visit our portfolio section to explore selected work.",
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary depending on complexity and deliverables.",
  },
];

const Contact = () => {
  return (
    <>
      <PageHero />

      <section className="bg-[#F8F7F2] py-24 overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-12">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[760px]"
          >
            <h2 className="font-[Founders] text-[#111111] text-5xl sm:text-6xl lg:text-7xl leading-[0.92]">
              Contact us for a<span className="text-[#6F00FF]"> ✱ </span>
              <br />
              personal experience
            </h2>
          </motion.div>

          {/* Main Grid */}

          <div className="grid lg:grid-cols-12 gap-8 mt-16">
            {/* Form */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8 border border-[#D8D8CF] rounded-[34px] p-8 lg:p-10 bg-[#F8F7F2]"
            >
              <form className="space-y-7">
                <div>
                  <label className="font-[Nexa] font-bold text-[#111111] text-[15px]">
                    Your name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-16 rounded-full border border-[#CFCFC7] bg-transparent px-7 mt-3 font-[Nexa] text-[#111111] placeholder:text-[#999] outline-none focus:border-[#6F00FF] focus:ring-4 focus:ring-[#CCCCFF]/40 duration-300"
                  />
                </div>

                <div>
                  <label className="font-[Nexa] font-bold text-[#111111] text-[15px]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-16 rounded-full border border-[#CFCFC7] bg-transparent px-7 mt-3 font-[Nexa] text-[#111111] placeholder:text-[#999] outline-none focus:border-[#6F00FF] focus:ring-4 focus:ring-[#CCCCFF]/40 duration-300"
                  />
                </div>

                <div>
                  <label className="font-[Nexa] font-bold text-[#111111] text-[15px]">
                    Phone No
                  </label>

                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full h-16 rounded-full border border-[#CFCFC7] bg-transparent px-7 mt-3 font-[Nexa] text-[#111111] placeholder:text-[#999] outline-none focus:border-[#6F00FF] focus:ring-4 focus:ring-[#CCCCFF]/40 duration-300"
                  />
                </div>

                <div>
                  <label className="font-[Nexa] font-bold text-[#111111] text-[15px]">
                    Write your message here...
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Tell us about your project..."
                    className="w-full rounded-[28px] border border-[#CFCFC7] p-6 mt-3 bg-transparent font-[Nexa] resize-none text-[#111111] placeholder:text-[#999] outline-none focus:border-[#6F00FF] focus:ring-4 focus:ring-[#CCCCFF]/40 duration-300"
                  />
                </div>

                <button className="bg-[#6F00FF] text-white px-9 py-4 rounded-full font-[Nexa] font-semibold cursor-pointer hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(111,0,255,0.35)] duration-300">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Side */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 border border-[#D8D8CF] rounded-[34px] p-8 bg-[#F8F7F2]"
            >
              <div className="space-y-8">
                <div>
                  <div className="flex gap-3 items-center mb-3">
                    <Mail size={20} className="text-[#6F00FF]" />

                    <h3 className="font-[Founders] text-[28px] text-[#111111]">
                      Email
                    </h3>
                  </div>

                  <p className="font-[Nexa] text-[#555]">
                    hey@creativelabstudio.in
                  </p>
                </div>

                <div className="border-t border-[#D8D8CF]" />

                <div>
                  <div className="flex gap-3 items-center mb-3">
                    <Phone size={20} className="text-[#6F00FF]" />

                    <h3 className="font-[Founders] text-[28px] text-[#111111]">
                      Call Us
                    </h3>
                  </div>

                  <p className="font-[Nexa] text-[#555]">+91 8897986707</p>
                </div>

                <div className="border-t border-[#D8D8CF]" />

                <div className="flex gap-4">
                  {[FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        className="w-12 h-12 rounded-full border border-[#CFCFC7] flex justify-center items-center text-[#111111] hover:bg-[#6F00FF] hover:text-white hover:border-[#6F00FF] duration-300 cursor-pointer"
                      >
                        <Icon size={18} />
                      </button>
                    ),
                  )}
                </div>

                <DownloadProfileCard />
              </div>
            </motion.div>
          </div>

          {/* FAQ */}

          <div className="mt-32">
            <h2 className="font-[Founders] text-center text-5xl lg:text-7xl leading-[0.95] mb-16">
              These FAQs help
              <span className="text-[#6F00FF]"> ✱ </span>
              <br />
              clients learn about us
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#D8D8CF] rounded-[26px] p-8 bg-white"
                >
                  <h3 className="font-[Founders] text-2xl text-[#111111] mb-4">
                    {faq.question}
                  </h3>

                  <p className="font-[Nexa] text-[#666666] leading-[1.8]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <Footer />
    </>
  );
};

export default Contact;
