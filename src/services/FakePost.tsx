import axios from "axios";

export const FakePost = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    return response;
  } catch (error) {
    throw new Error("Houve um erro!");
  }
};
