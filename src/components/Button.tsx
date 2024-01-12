type ButtonProps = {
  message: string;
  handleClick: () => void;
};

export default function Button({ message, handleClick }: ButtonProps) {
  return (
    <button
      value={message}
      onClick={handleClick}
      className="flex items-center justify-center px-6 py-3 font-semibold rounded-full shadow-sm bg-secondary text-tertiary shadow-secondary transition-transform hover:scale-105"
    >
      {message}
    </button>
  );
}
