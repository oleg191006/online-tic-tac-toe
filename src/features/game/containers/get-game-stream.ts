import { sseStream } from "@/shared/lib/sse/server";
import { NextRequest } from "next/server";

export function getGameStream(req: NextRequest) {
  const { handleClose, write, response } = sseStream(req);

  let counter = 1;

  const interval = setInterval(() => {
    write(counter++);
  }, 2000);

  handleClose(() => {
    clearInterval(interval);
  });
  return response;
}
