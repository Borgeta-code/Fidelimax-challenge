import { Question } from "@/types/Question";
import { useState } from "react";

export default function TextQuestion({
  answerValue,
  content,
  mandatory,
}: Question) {
  const [value, setValue] = useState<string | undefined>(
    answerValue?.toString()
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="flex gap-2 text-tertiary text-base">
        {content}
        {mandatory == false && <p className="text-tertiary/70">(Opcional)</p>}
      </h3>
      <textarea
        placeholder="Digite aqui..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-tertiary/40 rounded-lg py-2 px-4 resize-none"
      />
    </div>
  );
}
