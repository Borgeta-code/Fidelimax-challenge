"use client";

import RenderQuestions from "@/services/RenderQuestions";
import { Question } from "@/types/Question";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Form() {
  const [questions, setQuestions] = useState<Question[]>([]);

  // Busca as perguntas
  useEffect(() => {
    axios
      .get(
        "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json"
      )
      .then((response) => {
        setQuestions(response.data.itens);
      })
      .catch((error) => {
        console.error("Erro ao buscar as perguntas:", error);
      });
  }, []);

  return (
    <main className="flex w-screen h-full flex-col items-center justify-center">
      <div className="w-full h-60 bg-primary">
        <span className="absolute left-20 text-sm font-normal text-white/50">
          Pesquisa de satisfação
        </span>
      </div>

      <div className="flex flex-col w-1/3 -mt-48 gap-6">
        <h1 className="text-4xl font-semibold text-white">
          Pesquisa de satisfação
        </h1>
        <form className="flex flex-col w-full bg-white rounded-2xl p-8">
          {RenderQuestions(questions)}
        </form>
      </div>
    </main>
  );
}
