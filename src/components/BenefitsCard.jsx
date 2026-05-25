import { motion } from "framer-motion";
import {
  BarChart3,
  BrushCleaning,
  CalendarRange,
  CheckCircle2,
  Compass,
  Lightbulb,
  Sparkles,
  Wallet,
} from "lucide-react";

const iconMap = {
  Sparkles,
  Compass,
  BrushCleaning,
  CalendarRange,
  Wallet,
  Lightbulb,
};

function BenefitsCard({ benefits }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="rounded-[28px] border border-slate-200 bg-[linear-gradient(160deg,#ffffff_0%,#fcfbff_100%)] p-6 shadow-[0_24px_80px_rgba(31,38,135,0.1)]"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-[#C0FF00]/30 p-3 text-[#6F00FF]">
          <BarChart3 className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Why clients love it
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-950">
            Discovery call benefits
          </h2>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {benefits.map((item, index) => {
          const Icon = iconMap[item.icon];

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.35 }}
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-[#6F00FF]/10 p-2 text-[#6F00FF]">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <CheckCircle2 className="h-4 w-4 text-[#6F00FF]" />
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default BenefitsCard;
