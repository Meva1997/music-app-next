type ErrorMessageProps = {
  message?: React.ReactNode; // Mensaje de error opcional
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null; // Si no hay mensaje, no renderiza nada
  return (
    <div className="p-2 mx-auto my-4 text-center bg-red-600 border-2 border-red-800 rounded-lg w-fit">
      <p className="text-white ">{message}</p>
    </div>
  );
}
