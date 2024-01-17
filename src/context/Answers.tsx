"use client";

import { AnswerContextProps } from "@/types/Answers";
import { ReactNode, createContext, useState } from "react";

export const AnswerContext = createContext<AnswerContextProps | undefined>(
  undefined
);

interface AnswerProviderProps {
  children: ReactNode;
}

export const AnswerProvider = ({ children }: AnswerProviderProps) => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  return (
    <AnswerContext.Provider value={{ answers, setAnswers }}>
      {children}
    </AnswerContext.Provider>
  );
};
