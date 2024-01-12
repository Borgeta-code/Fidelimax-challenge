import { Question } from "@/types/Question";
import { useState } from "react";

export default function UniqueRadioQuestion({
  answerValue,
  content,
  itens,
}: Question) {
  const [selectedValue, setSelectedValue] = useState(answerValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(Number(event.target.value));
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-tertiary text-base font-medium">{content}</h3>
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
