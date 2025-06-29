import { gameRepository } from "../repositories/game";
import { GameId } from "@/kernel/ids";

export const getGameById = (gameId: GameId) => {
  return gameRepository.getGameById({ id: gameId });
};
