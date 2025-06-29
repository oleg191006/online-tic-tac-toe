import { GameDomain } from "@/entities/game";

export function GameStatus({ game }: { game: GameDomain.GameEntity }) {
  switch (game.status) {
    case "idle": {
      return <div className="text-lg">expect player...</div>;
    }
    case "inProgress": {
      const currentSymbol = GameDomain.getGameCurrentSymbol(game);

      return <div className="text-lg">Turn: {currentSymbol}</div>;
    }
    case "gameOver": {
      const currentSymbol = GameDomain.getPlayerSymbol(game.winner, game);

      return <div className="text-lg">Winner: {currentSymbol}</div>;
    }
    case "gameOverDraw": {
      return <div className="text-lg">Draw</div>;
    }
  }
}
