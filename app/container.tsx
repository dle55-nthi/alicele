// components/PinkContainer.tsx
import { ReactNode } from "react";

export default function PinkContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#EDE3E7] rounded-3xl w-fit min-w-[300px] max-w-4xl p-10 relative">
        {children}
      </div>
    </div>
  );
}