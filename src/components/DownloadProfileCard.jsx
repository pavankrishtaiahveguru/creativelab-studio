import { useEffect, useState } from "react";
import { X } from "lucide-react";

const DOWNLOAD_FILE = "/CreativeLabStudioProfile.pdf";

const DownloadProfileCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState("checking");
  const [message, setMessage] = useState("Checking profile file...");

  useEffect(() => {
    const controller = new AbortController();

    const verifyDownloadFile = async () => {
      try {
        const response = await fetch(DOWNLOAD_FILE, {
          method: "HEAD",
          signal: controller.signal,
        });

        if (response.ok) {
          setDownloadStatus("available");
          setMessage("Download the latest profile PDF.");
          return;
        }

        setDownloadStatus("missing");
        setMessage("Profile PDF is not available right now.");
      } catch {
        setDownloadStatus("missing");
        setMessage("Profile PDF is not available right now.");
      }
    };

    verifyDownloadFile();

    return () => controller.abort();
  }, []);

  const handleOpenModal = () => {
    if (downloadStatus === "available") {
      setOpenModal(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (downloadStatus !== "available") {
      return;
    }

    const link = document.createElement("a");
    link.href = DOWNLOAD_FILE;
    link.download = "CreativeLabStudioProfile.pdf";
    link.rel = "noopener noreferrer";
    link.click();

    setOpenModal(false);
  };

  return (
    <>
      <div className="border border-[#D8D8CF] rounded-[28px] p-8 text-center">
        <h3 className="font-[Founders] text-[#111111] text-[34px] mb-4">
          Explore our work
        </h3>

        <p className="font-[Nexa] text-[#555] mb-6 min-h-6">{message}</p>

        <button
          type="button"
          onClick={handleOpenModal}
          disabled={downloadStatus !== "available"}
          className={`px-8 py-4 rounded-full font-[Nexa] font-medium duration-300 ${
            downloadStatus === "available"
              ? "bg-[#6F00FF] text-white cursor-pointer hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(111,0,255,0.35)]"
              : "bg-[#D8D8CF] text-[#777] cursor-not-allowed"
          }`}
        >
          {downloadStatus === "checking"
            ? "Checking file..."
            : downloadStatus === "available"
              ? "Download Profile"
              : "Download Unavailable"}
        </button>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-5">
          <div className="bg-[#F8F7F2] rounded-[34px] max-w-[700px] w-full p-8 lg:p-10 relative animate-[fadeUp_.35s_ease]">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="absolute top-5 right-5 text-[#777777] hover:text-black cursor-pointer"
            >
              <X size={30} />
            </button>

            <h2 className="font-[Founders] text-[#111111] text-4xl lg:text-5xl leading-[0.95] mb-3">
              Restricted Download
            </h2>

            <p className="font-[Nexa] text-[#666666] mb-10">
              To download this file, please fill in this form.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-[Nexa] font-semibold text-[#111111]">
                  Email
                </label>

                <input
                  required
                  type="email"
                  className="w-full h-14 rounded-xl border border-[#D7D7D0] px-5 mt-2 bg-white outline-none focus:border-[#6F00FF] focus:ring-4 focus:ring-[#CCCCFF]/40 duration-300"
                />
              </div>

              <div>
                <label className="font-[Nexa] font-semibold text-[#111111]">
                  Name
                </label>

                <input
                  required
                  type="text"
                  className="w-full h-14 rounded-xl border border-[#D7D7D0] px-5 mt-2 bg-white outline-none focus:border-[#6F00FF] focus:ring-4 focus:ring-[#CCCCFF]/40 duration-300"
                />
              </div>

              <div>
                <label className="font-[Nexa] font-semibold text-[#111111]">
                  Job Title
                </label>

                <input
                  type="text"
                  className="w-full h-14 rounded-xl border border-[#D7D7D0] px-5 mt-2 bg-white outline-none focus:border-[#6F00FF] focus:ring-4 focus:ring-[#CCCCFF]/40 duration-300"
                />
              </div>

              <div>
                <label className="font-[Nexa] font-semibold text-[#111111]">
                  Company
                </label>

                <input
                  type="text"
                  className="w-full h-14 rounded-xl border border-[#D7D7D0] px-5 mt-2 bg-white outline-none focus:border-[#6F00FF] focus:ring-4 focus:ring-[#CCCCFF]/40 duration-300"
                />
              </div>

              <label className="flex items-center gap-3 font-[Nexa] text-[#444444]">
                <input
                  required
                  type="checkbox"
                  className="w-5 h-5 accent-[#6F00FF] cursor-pointer"
                />
                I agree to receive updates.
              </label>

              <div className="flex justify-end pt-5">
                <button
                  type="submit"
                  className="bg-[#6F00FF] text-white px-8 py-4 rounded-xl font-[Nexa] font-semibold cursor-pointer hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(111,0,255,0.35)] duration-300"
                >
                  GET YOUR FILE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DownloadProfileCard;
