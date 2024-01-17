import { AnswerContext } from "@/context/Answers";
import { Question } from "@/types/Question";
import { AlertCircle, ChevronDown } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function SelectQuestion({
  answerValue,
  content,
  itens,
  mandatory,
}: Question) {
  const [selectedValue, setSelectedValue] = useState(answerValue);

  const [answered, setAnswered] = useState<boolean>(false);

  const { answers, setAnswers } = useContext(AnswerContext)!;

  useEffect(() => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [content]: selectedValue !== undefined ? selectedValue.toString() : "",
    }));
    setAnswered(selectedValue !== undefined);
  }, [selectedValue, content, setAnswers]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(Number(event.target.value));
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {mandatory && !answered && (
        <div className="flex items-center gap-2 text-red-400 mb-2">
          <AlertCircle />
          <p className="text-sm font-medium">Esta pergunta é obrigatória.</p>
        </div>
      )}
      <label className="relative">
        <select
          value={selectedValue}
          onChange={handleChange}
          className="w-full border border-tertiary/40 rounded-lg p-3 text-tertiary  appearance-none"
        >
          <option value="">{content}</option>
          {itens?.map((item) => (
            <option key={item.value} value={item.value}>
              {item.description}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-tertiary" />
      </label>
    </div>
  );
}
