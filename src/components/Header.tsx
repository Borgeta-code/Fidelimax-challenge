import { ChevronDown, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex w-screen h-20 py-2 px-8 items-center justify-between bg-primary">
      <div className="flex justify-center items-center gap-6">
        <Menu />
        <span className="flex uppercase font-light text-2xl gap-2">
          Sua <p className="font-extrabold text-secondary">Logo</p>
        </span>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center w-10 h-10 bg-[#333E4F] rounded-full">
          F
        </div>
        <span className="text-sm">Fábio C. Pinto</span>
        <ChevronDown />
      </div>
    </header>
  );
}
