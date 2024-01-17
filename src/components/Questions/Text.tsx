import { AnswerContext } from "@/context/Answers";
import { Question } from "@/types/Question";
import { AlertCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function TextQuestion({
  answerValue,
  content,
  mandatory,
}: Question) {
  const [value, setValue] = useState<string | undefined>(
    answerValue?.toString()
  );

  const [answered, setAnswered] = useState<boolean>(false);

  const { answers, setAnswers } = useContext(AnswerContext)!;

  useEffect(() => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [content]: value || "" }));
    setAnswered(!!value);
  }, [value, content, setAnswers]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {mandatory && !answered && (
        <div className="flex items-center gap-2 text-red-400 mb-2">
          <AlertCircle />
          <p className="text-sm font-medium">Esta pergunta é obrigatória.</p>
        </div>
      )}

      <h3 className="flex gap-2 text-tertiary text-sm md:text-base font-medium">
        {content}
        {mandatory == false && <p className="text-tertiary/70">(Opcional)</p>}
      </h3>
      <textarea
        placeholder="Digite aqui..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-28 border border-tertiary/40 rounded-lg py-2 px-4 resize-none text-tertiary"
      />
    </div>
  );
}
