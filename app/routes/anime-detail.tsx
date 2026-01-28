import { useParams, useNavigate } from "react-router";
import AnimeDetail from "~/pages/AnimeDetail";

export default function AnimeDetailRoute() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return null;

  return <AnimeDetail id={id} onBack={() => navigate(-1)} />;
}
