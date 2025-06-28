"use client";

import { GameIdleEntity } from "@/entities/game/domain";
import GameCard from "../ui/game-card";
import Layout from "../ui/layout";
import CreateButton from "./create-button";

export function GamesListClient({ games }: { games: GameIdleEntity[] }) {
  return (
    <Layout actions={<CreateButton />}>
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
        />
      ))}
    </Layout>
  );
}
