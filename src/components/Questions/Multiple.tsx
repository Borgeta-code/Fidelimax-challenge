import { AnswerContext } from "@/context/Answers";
import { Question } from "@/types/Question";
import { AlertCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function MultipleQuestion({
  answerValue,
  content,
  horizontal,
  itens,
  mandatory,
}: Question) {
  const [selectedValues, setSelectedValues] = useState(
    Array.isArray(answerValue) ? answerValue.map(Number) : []
  );

  const [answered, setAnswered] = useState<boolean>(false);

  const { answers, setAnswers } = useContext(AnswerContext)!;

  useEffect(() => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [content]: selectedValues.toString(),
    }));
    setAnswered(selectedValues.length > 0);
  }, [selectedValues, content, setAnswers]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col gap-3 w-full text-tertiary text-sm md:text-base">
      {mandatory && !answered && (
        <div className="flex items-center gap-2 text-red-400 mb-2">
          <AlertCircle />
          <p className="text-sm font-medium">Esta pergunta é obrigatória.</p>
        </div>
      )}

      <span className="font-medium">{content}</span>

      {horizontal ? (
        <div className="flex gap-3 flex-wrap">
          {itens?.map((item) => (
            <div
              key={item.value}
              onClick={() =>
                handleChange({ target: { value: item.value } } as any)
              }
              className={`flex justify-center items-center py-1 px-4 text-tertiary rounded-full cursor-pointer text-nowrap ${
                selectedValues.includes(item.value)
                  ? "border bg-tertiary/50 text-white shadow-sm"
                  : "border border-tertiary/30"
              }`}
            >
              {item.description}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {itens?.map((item) => (
            <label key={item.value} className="flex gap-4">
              <input
                type="checkbox"
                value={item.value}
                checked={selectedValues.includes(item.value)}
                onChange={handleChange}
              />
              {item.description}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
