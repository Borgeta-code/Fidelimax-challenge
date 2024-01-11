export type Question = {
  typeQuestion: number;
  answerValue?: number | string;
  mandatory: boolean;
  content: string;
  horizontal?: boolean;
  itens?: { value: number; description: string }[];
};
