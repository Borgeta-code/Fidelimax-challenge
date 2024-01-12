import { Question } from "@/types/Question";
import { useState } from "react";

export default function RadioQuestion({ answerValue, content }: Question) {
  const [value, setValue] = useState<number | string | undefined>(answerValue);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-quaternary text-2xl font-bold">
        Título da pergunta deve ficar aqui
      </h2>
      <h3 className="text-tertiary text-base">{content}</h3>
      <div className="flex items-center">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((elm, i) => {
          return (
            <div className="flex flex-col w-full gap-2 items-center justify-between">
              <input
                type="radio"
                id={`radio${elm}`}
                name="radio"
                value={elm}
                checked={value === elm}
                onChange={() => setValue(elm)}
              />
              <label className="text-tertiary" htmlFor={`radio${elm}`}>
                {elm}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
