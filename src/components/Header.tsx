import { ChevronDown, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex w-screen h-20 py-2 px-3 md:px-8 items-center justify-between bg-primary">
      <div className="flex justify-center items-center gap-3 md:gap-6">
        <Menu className="w-4 md:w-16" />
        <span className="flex uppercase font-light text-base md:text-2xl gap-1">
          Sua <p className="font-extrabold text-secondary">Logo</p>
        </span>
      </div>

      <div className="flex justify-center items-center gap-2 md:gap-4">
        <div className="flex justify-center items-center w-10 h-10 bg-tertiary rounded-full">
          F
        </div>
        <span className="text-sm md:text-sm">Fábio C. Pinto</span>
        <ChevronDown className="w-4 md:w-12" />
      </div>
    </header>
  );
}
