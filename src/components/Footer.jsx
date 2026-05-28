import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DevelopedByStaffArc from "./DevelopedByStaffArc";

const Footer = () => {
  const logo =
    "https://res.cloudinary.com/dcnmzhp9k/image/upload/v1779779956/Creative_Lab_v0xrl3.svg";

  return (
    <footer className="relative overflow-hidden bg-[#CCCCFF] border-t border-[#B7B7F5]">
      {/* Glow Effects */}

      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#6F00FF]/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#C0FF00]/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-18">
        {/* Top */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">
          {/* Brand */}

          <div>
            <img
              src={logo}
              alt="CreativeLab Studio"
              className="h-35 object-contain mb-6"
            />

            <p className="font-[Nexa] text-[#4D3B7A] leading-8 text-[15px] max-w-xs">
              CreativeLab Studio crafts luxury branding, cinematic visuals,
              digital experiences, and modern design systems with emotion and
              precision.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.instagram.com/creativelabstudio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#6F00FF] hover:bg-[#6F00FF] hover:text-white duration-300 cursor-pointer"
              >
                <FaInstagram size={25} />
              </a>

              <a
                href="https://www.linkedin.com/company/the-creative-labstudio/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/50 flex items-center justify-center text-[#6F00FF] hover:bg-[#6F00FF] hover:text-white duration-300 cursor-pointer"
              >
                <FaLinkedinIn size={25} />
              </a>
            </div>
          </div>

          {/* Navigation */}

          <div className="mt-0 lg:mt-5">
            <h3 className="font-[Founders] text-[#6F00FF] text-3xl mb-6">
              Navigation
            </h3>

            <div className="flex flex-col gap-4 font-[Nexa] text-[#4D3B7A]">
              <Link to="/" className="hover:text-[#6F00FF] duration-300">
                Home
              </Link>

              <Link to="/about" className="hover:text-[#6F00FF] duration-300">
                About
              </Link>

              <Link
                to="/services"
                className="hover:text-[#6F00FF] duration-300"
              >
                Services
              </Link>

              <Link
                to="/portfolio"
                className="hover:text-[#6F00FF] duration-300"
              >
                Portfolio
              </Link>

              <Link to="/contact" className="hover:text-[#6F00FF] duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}

          <div className="mt-0 lg:mt-5">
            <h3 className="font-[Founders] text-[#6F00FF] text-3xl mb-6">
              Services
            </h3>

            <div className="flex flex-col gap-4 font-[Nexa] text-[#4D3B7A]">
              <p>Brand Identity</p>

              <p>Creative Direction</p>

              <p>Visual Storytelling</p>

              <p>UI / UX Design</p>

              <p>Social Media Design</p>
            </div>
          </div>

          {/* Contact */}

          <div className="mt-0 lg:mt-5">
            <h3 className="font-[Founders] text-[#6F00FF] text-3xl mb-6">
              Contact
            </h3>

            <div className="space-y-5 font-[Nexa] text-[#4D3B7A]">
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-[#6F00FF]" />

                <span>+91 88979 86707</span>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="mt-1 text-[#6F00FF]" />

                <span>hey@creativelabstudio.in</span>
              </div>

              <p className="leading-7 flex items-start gap-3">
                <FaLocationDot className="text-[#6F00FF] mt-1 text-lg shrink-0" />

                <span>
                  MIG 145,
                  
                  KPHB ROAD NO1,
                  <br />
                  Hyderabad 500072
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-[#B7B7F5] flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="font-[Nexa] text-[#5D4C88] text-sm text-center lg:text-left">
            © 2026 CreativeLab Studio. Crafted with intention.
          </p>

          <DevelopedByStaffArc />

          <div className="flex items-center gap-6 font-[Nexa] text-sm text-[#5D4C88]">
            <Link
              to="/terms-and-conditions"
              className="hover:text-[#6F00FF] duration-300"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/privacy-policy"
              className="hover:text-[#6F00FF] duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
