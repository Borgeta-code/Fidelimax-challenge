import axios from "axios";

export const FakePost = async (
  event: React.MouseEvent<HTMLButtonElement>,
  answers: { [key: string]: string }
) => {
  event.preventDefault();
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts/",
      answers
    );
    return response;
  } catch (error) {
    throw new Error("Houve um erro!");
  }
};
