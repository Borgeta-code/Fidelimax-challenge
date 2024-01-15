import axios from "axios";

export const SendError = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  try {
    const response = await axios.get(
      "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json"
    );
    return response.data;
  } catch (error) {
    throw new Error("Houve um erro!");
  }
};
