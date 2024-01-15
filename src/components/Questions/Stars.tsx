import { Question } from "@/types/Question";
import Image from "next/image";
import { useState } from "react";
import GoldStar from "../../../public/gold-star.svg";
import GrayStar from "../../../public/gray-star.svg";

export default function StarsQuestion({ answerValue, content }: Question) {
  const [value, setValue] = useState<number | string | undefined>(answerValue);

  function handleChoice(numberOfStars: number) {
    setValue(numberOfStars);
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-quaternary text-xl md:text-2xl font-bold">
        Título da pergunta deve ficar aqui
      </h2>
      <h3 className="text-tertiary text-sm md:text-base">{content}</h3>
      <ul className="flex items-center gap-8">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((elm, i) => {
          return (
            <li
              key={i}
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => handleChoice(elm)}
            >
              <Image
                src={i >= (value ? Number(value) : 0) ? GrayStar : GoldStar}
                width={45}
                height={45}
                alt="Star"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
