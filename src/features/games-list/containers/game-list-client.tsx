"use client";

import { Button } from "@/shared/ui/button";
import { routes } from "@/kernel/routes";
import Link from "next/link";
import { GameDomain } from "@/entities/game";
import { useEventsSource } from "@/shared/lib/sse/client";

import CreateButton from "./create-button";
import GameCard from "../ui/game-card";
import { Layout } from "../ui/layout";

export function GamesListClient({
  games,
}: {
  games: GameDomain.GameIdleEntity[];
}) {
  const { dataStream: gamesStream = games } = useEventsSource<
    GameDomain.GameIdleEntity[]
  >(routes.gamesStream());

  return (
    <Layout actions={<CreateButton />}>
      {gamesStream.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
          actions={
            <Link href={routes.game(game.id)}>
              <Button>Connect</Button>
            </Link>
          }
        />
      ))}
    </Layout>
  );
}
