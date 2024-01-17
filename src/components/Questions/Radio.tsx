import { AnswerContext } from "@/context/Answers";
import { Question } from "@/types/Question";
import { AlertCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function RadioQuestion({
  answerValue,
  content,
  mandatory,
}: Question) {
  const [value, setValue] = useState<number | string | undefined>(answerValue);

  const [answered, setAnswered] = useState<boolean>(false);

  const { answers, setAnswers } = useContext(AnswerContext)!;

  useEffect(() => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [content]: value?.toString() || "",
    }));

    setAnswered(!!value);
  }, [value, content, setAnswers]);

  return (
    <div className="flex flex-col gap-6">
      {mandatory && !answered && (
        <div className="flex items-center gap-2 text-red-400 mb-2">
          <AlertCircle />
          <p className="text-sm font-medium">Esta pergunta é obrigatória.</p>
        </div>
      )}
      <h2 className="text-quaternary text-xl md:text-2xl font-bold">
        Título da pergunta deve ficar aqui
      </h2>
      <h3 className="text-tertiary text-sm md:text-base">{content}</h3>
      <div className="flex items-center">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((elm, i) => {
          return (
            <div
              className="flex flex-col w-full gap-2 items-center justify-between"
              key={i}
            >
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
