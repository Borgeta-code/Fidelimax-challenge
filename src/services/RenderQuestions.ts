import { Question } from "@/types/Question";

export default function RenderQuestions(questions: Question[]) {
  return questions.map((question) => {
    switch (question.typeQuestion) {
      case 1:
        // pergunta de estrela
        break;
      case 2:
        // ergunta de rádio
        break;
      case 3:
        // pergunta de texto
        break;
      case 4:
        // seleção única (select)
        break;
      case 5:
        // seleção única (radio)
        break;
      case 6:
        // seleção múltipla
        break;
      default:
        return null;
    }
  });
}
