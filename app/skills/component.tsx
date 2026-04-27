import { ReactNode } from "react";

export default function SmallBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col inline-block items-center scale-[0.95] sm:scale-100 rounded-2xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300 justify-between group">
      <div className="bg-[#EDE3E7] rounded-2xl p-4 border border-zinc-200  shadow-sm group-hover:scale-[1.03] transition-all duration-300">
        {children}
      </div>
    </div>
  );
}