import type { Route } from "./+types/home";
import AnimeList from "~/pages/AnimeList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <AnimeList />;
}
