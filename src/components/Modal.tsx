import { CheckCircle, XCircle } from "lucide-react";

interface ItemProps {
  message: String;
  type: String;
  onClose: () => void;
}

export default function Modal(props: ItemProps) {
  return (
    <div className="fixed top-0 left-0 z-10 bg-black/70 h-screen w-full flex justify-center items-center">
      <div className="w-max bg-white rounded-md flex flex-col items-center pointer-events-auto p-4 relative overflow-hidden">
        {props.type == "error" ? (
          <div className="flex flex-col gap-4 p-2 justify-center items-center">
            <XCircle className="text-red-500 w-28 h-28" />
            <h2 className="text-red-500 font-medium text-2xl">Erro</h2>
          </div>
        ) : (
          <div className="flex flex-col gap-4 p-2 justify-center items-center">
            <CheckCircle className="text-green-500 w-28 h-28" />
            <h2 className="text-green-500 font-medium text-2xl">Sucesso</h2>
          </div>
        )}

        <div className="flex justify-center items-center w-full py-4 gap-4 text-tertiary font-medium mb-6">
          {props.message}
        </div>

        <button
          className={`
        text-white transition-colors px-4 py-1 absolute bottom-0 w-full
        ${
          props.type == "error"
            ? `bg-red-500 hover:bg-red-400`
            : "bg-green-500 hover:bg-green-400"
        }
       
    `}
          onClick={props.onClose}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
