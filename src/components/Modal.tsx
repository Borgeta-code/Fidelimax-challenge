import { XIcon } from "lucide-react";

interface ItemProps {
  message: String;
  type: String;
  onClose: () => void;
}

export default function Modal(props: ItemProps) {
  return (
    <div className="fixed top-0 left-0 z-10 bg-black/70 h-screen w-full flex justify-center items-center">
      <div className="w-max bg-white rounded-md flex flex-col items-center pointer-events-auto p-4">
        <div className="flex justify-between items-center w-full pb-2">
          {props.type == "error" ? (
            <p className="text-red-600 text-xl font-medium">Erro</p>
          ) : (
            <p className="text-green-500 text-xl font-medium">Sucesso</p>
          )}

          <XIcon
            className="w-6 h-6 cursor-pointer text-red-600 hover:text-red-400"
            onClick={props.onClose}
          />
        </div>

        <div className="bg-tertiary/20 w-full h-[2px]" />

        <div className="flex justify-center items-center w-full py-4 gap-4 text-tertiary font-medium">
          {props.message}
        </div>
      </div>
    </div>
  );
}
