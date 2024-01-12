import RadioQuestion from "@/components/Questions/Radio";
import SelectQuestion from "@/components/Questions/Select";
import TextQuestion from "@/components/Questions/Text";
import UniqueRadioQuestion from "@/components/Questions/UniqueRadio";
import { Question } from "@/types/Question";
import StarsQuestion from "../components/Questions/Stars";

export default function RenderQuestions(questions: Question[]) {
  return questions.map((question) => {
    switch (question.typeQuestion) {
      case 1:
        return <StarsQuestion {...question} />;
      case 2:
        return <RadioQuestion {...question} />;
      case 3:
        return <TextQuestion {...question} />;
      case 4:
        return <SelectQuestion {...question} />;
      case 5:
        return <UniqueRadioQuestion {...question} />;
      case 6:
        // seleção múltipla
        break;
      default:
        return null;
    }
  });
}
