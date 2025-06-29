import { getGameById } from "@/entities/game/server";
import { GameId } from "@/kernel/ids";
import { sseStream } from "@/shared/lib/sse/server";
import { NextRequest } from "next/server";

export async function getGameStream(
  req: NextRequest,
  { params }: { params: Promise<{ id: GameId }> },
) {
  const { id } = await params;

  const game = await getGameById(id);

  if (!game) {
    return new Response(`Game not found`, {
      status: 404,
    });
  }

  const { addCloseListener, write, response } = sseStream(req);

  write(game);

  addCloseListener(() => {});
  return response;
}
