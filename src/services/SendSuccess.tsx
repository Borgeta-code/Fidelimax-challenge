import axios from "axios";

export const SendSuccess = async (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.preventDefault();
  try {
    const response = await axios.get(
      "https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json"
    );
    return response.data;
  } catch (error) {
    throw new Error("Houve um erro!");
  }
};
