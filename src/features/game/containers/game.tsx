import { GameId } from "@/kernel/ids";
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";

import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { GameDomain } from "@/entities/game";

export function Game({ gameId }: { gameId: GameId }) {
  const game: GameDomain.GameEntity = {
    id: "1",
    players: [
      {
        id: "1",
        login: "test",
        rating: 10000,
      },
      {
        id: "2",
        login: "test2",
        rating: 10000,
      },
    ],
    status: "inProgress",
    field: [null, null, null, "O", "O", "X", null, "X", "X"],
  };

  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
    />
  );
}
