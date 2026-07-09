import React from "react";

const ServiceCard = ({ icon, title, items }) => {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/35 backdrop-blur-xl shadow-[0_15px_45px_rgba(111,0,255,0.08)] hover:shadow-[0_25px_70px_rgba(111,0,255,0.18)] hover:-translate-y-2 duration-500 p-8 min-h-[280px]">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-br from-[#6F00FF]/5 via-transparent to-[#C0FF00]/10" />

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6F00FF] to-transparent opacity-50" />

      <div className="relative z-10">
        <div className="w-24 h-24 rounded-[20px] bg-white/70 border border-[#E4D9FF] flex items-center justify-center text-[#6F00FF] mb-7 group-hover:rotate-6 duration-500">
          {icon && typeof icon.type === "function"
            ? React.cloneElement(icon, { size: 48 })
            : icon}
        </div>

        <h3 className="font-[Founders] text-[#111111] text-[30px] leading-[1] mb-7">
          {title}
        </h3>

        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="font-nexa text-[#555555] text-sm flex gap-2"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-[#6F00FF] mt-[8px]" />

              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
