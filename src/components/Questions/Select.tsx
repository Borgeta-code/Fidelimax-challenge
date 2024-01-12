import { Question } from "@/types/Question";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function SelectQuestion({
  answerValue,
  content,
  itens,
}: Question) {
  const [selectedValue, setSelectedValue] = useState(answerValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(Number(event.target.value));
  };

  return (
    <div className="flex flex-col gap-4 w-full">
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
