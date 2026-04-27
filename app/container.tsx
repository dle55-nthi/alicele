// components/PinkContainer.tsx
import { ReactNode } from "react";

export default function PinkContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex justify-center scale-[0.95] sm:scale-100">
      <div className="bg-[] rounded-3xl w-fit min-w-[300px] max-w-4xl p-10 relative">
        {children}
      </div>
    </div>
  );
}