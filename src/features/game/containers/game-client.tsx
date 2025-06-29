"use client";

import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";

import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { GameDomain } from "@/entities/game";
import { useGame } from "@/features/model/use-game";

export function GameClient({
  defaultGame,
  player,
}: {
  defaultGame: GameDomain.GameEntity;
  player: GameDomain.PlayerEntity;
}) {
  const { game = defaultGame, step } = useGame(defaultGame.id, player);

  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} onCellClick={step} />}
    />
  );
}
