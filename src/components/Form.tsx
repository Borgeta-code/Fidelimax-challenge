"use client";

import RenderQuestions from "@/services/RenderQuestions";
import { SendError } from "@/services/SendError";
import { SendSuccess } from "@/services/SendSuccess";
import { Question } from "@/types/Question";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function Form() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [isLoading, setIsLoading] = useState(true);

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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Modal Erro
  const [isModalErroOpen, setIsModalErroOpen] = useState(false);
  const [ErrorResponse, setErrorResponse] = useState("");

  const handleSendError = async () => {
    try {
      const result = await SendError(event);
      setErrorResponse(result.error);
      setIsModalErroOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Modal Sucesso
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const SuccessResponse = "Sucesso ao enviar formulário!";

  const handleSendSuccess = async () => {
    try {
      await SendSuccess(event);
      setIsModalSuccessOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex w-screen h-full flex-col items-center justify-center">
      {isModalErroOpen && (
        <Modal
          type={"error"}
          onClose={() => setIsModalErroOpen(false)}
          message={ErrorResponse}
        />
      )}

      {isModalSuccessOpen && (
        <Modal
          type={"success"}
          onClose={() => setIsModalSuccessOpen(false)}
          message={SuccessResponse}
        />
      )}

      <div className="w-full h-60 bg-primary">
        <span className="absolute left-20 text-sm font-normal text-white/50">
          Pesquisa de satisfação
        </span>
      </div>

      <div className="flex flex-col w-1/3 -mt-48 gap-6 py-4">
        <h1 className="text-4xl font-semibold text-white">
          Pesquisa de satisfação
        </h1>
        <form className="flex flex-col bg-white rounded-2xl p-8 gap-14">
          {isLoading ? (
            <div className="card">
              <div className="card__skeleton card__title"></div>
              <div className="card__skeleton card__description"></div>
            </div>
          ) : (
            <>
              {RenderQuestions(questions)}
              <div className="flex items-center justify-between w-full">
                <Button message="Enviar Fake Post" handleClick={() => {}} />
                <Button message="Enviar Erro" handleClick={handleSendError} />
                <Button
                  message="Enviar Sucesso"
                  handleClick={handleSendSuccess}
                />
              </div>
            </>
          )}
        </form>
      </div>
    </main>
  );
}
