type ButtonProps = {
  message: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ message, handleClick }: ButtonProps) {
  return (
    <button
      value={message}
      onClick={handleClick}
      className="flex items-center justify-center  w-full md:w-max text-sm md:text-base px-3 py-2 md:px-6 md:py-3 font-semibold rounded-full shadow-sm bg-secondary text-tertiary shadow-secondary transition-transform hover:scale-105"
    >
      {message}
    </button>
  );
}
