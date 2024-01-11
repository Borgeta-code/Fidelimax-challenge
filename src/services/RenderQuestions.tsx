import { Question } from "@/types/Question";
import StarsQuestion from "../components/Questions/Stars";

export default function RenderQuestions(questions: Question[]) {
  return questions.map((question) => {
    switch (question.typeQuestion) {
      case 1:
        return <StarsQuestion {...question} />;
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
