import { Question } from "@/types/Question";
import { useState } from "react";

export default function MultipleQuestion({
  answerValue,
  content,
  horizontal,
  itens,
}: Question) {
  const [selectedValues, setSelectedValues] = useState(
    Array.isArray(answerValue) ? answerValue : [answerValue]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col gap-3 w-full text-tertiary">
      <span className="font-medium">{content}</span>

      {horizontal ? (
        <div className="flex gap-3">
          {itens?.map((item) => (
            <div
              onClick={() =>
                handleChange({ target: { value: item.value } } as any)
              }
              className={`flex justify-center items-center py-1 px-4 text-tertiary rounded-full cursor-pointer ${
                selectedValues.includes(item.value)
                  ? "border bg-tertiary/40 text-white shadow-sm"
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
