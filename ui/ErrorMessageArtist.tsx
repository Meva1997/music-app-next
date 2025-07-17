type Props = { message?: string | null };
export default function ErrorMessageArtist({ message }: Props) {
  if (!message) return null;
  return <div className="mt-4 text-center text-red-500">{message}</div>;
}
