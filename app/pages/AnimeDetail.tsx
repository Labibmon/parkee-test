interface Props {
  id: string;
  onBack: () => void;
}

export default function AnimeDetail({ id, onBack }: Props) {
  // fetch detail by id
  return (
    <>
      <button onClick={onBack}>Back</button>
      <div>Anime Detail {id}</div>
    </>
  );
}
