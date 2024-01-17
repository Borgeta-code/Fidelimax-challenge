import { AnswerContext } from "@/context/Answers";
import { Question } from "@/types/Question";
import { AlertCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function UniqueRadioQuestion({
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(event.target.value));
  };

  return (
    <div className="flex flex-col gap-4">
      {mandatory && !answered && (
        <div className="flex items-center gap-2 text-red-400 mb-2">
          <AlertCircle />
          <p className="text-sm font-medium">Esta pergunta é obrigatória.</p>
        </div>
      )}
      <h3 className="text-tertiary text-sm md:text-base font-medium">
        {content}
      </h3>
      <div className="flex items-center text-tertiary gap-4">
        {itens?.map((item) => (
          <label className="flex gap-2" key={item.value}>
            <input
              type="radio"
              value={item.value}
              checked={selectedValue === item.value}
              onChange={handleChange}
            />
            {item.description}
          </label>
        ))}
      </div>
    </div>
  );
}
