import { ReactNode } from "react";

export default function SmallBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#BDA0A5] rounded-2xl p-4">
      {children}
    </div>
  );
}

