import { AnimatePresence, motion } from "framer-motion";

function SuccessModal({ isOpen, onClose, onReturnHome, onViewPortfolio }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            className="w-full max-w-lg rounded-[28px] bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.24)] sm:p-8"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C0FF00]/40 text-[#6F00FF]">
              <span className="text-3xl">✓</span>
            </div>

            <h2 className="mt-5 text-center text-3xl font-semibold text-slate-950">
              Discovery Call Booked
            </h2>
            <p className="mt-3 text-center text-sm leading-7 text-slate-600 sm:text-base">
              Thank you for choosing CreativeLab Studio. Our team will confirm
              your preferred slot and reach out with next steps.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onReturnHome}
                className="flex-1 rounded-full bg-[#6F00FF] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_45px_rgba(111,0,255,0.25)]"
              >
                Return Home
              </button>
              <button
                type="button"
                onClick={onViewPortfolio}
                className="flex-1 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#6F00FF] hover:text-[#6F00FF]"
              >
                View Portfolio
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-4 w-full text-sm text-slate-500"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SuccessModal;
