"use-client";

import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";
import { useActionState } from "@/shared/lib/react";
import { mapLeft, right } from "@/shared/lib/either";
import { startTransition } from "react";

export default function CreateButton() {
  const [data, dispatch, isPending] = useActionState(
    createGameAction,
    right(undefined),
  );
  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(dispatch)}
      error={mapLeft(
        data,
        (e) =>
          ({
            ["can-create-only-one-game"]: "You can create only one game",
            ["user-not-found"]: "There are no user",
          })[e],
      )}
    >
      Create game
    </Button>
  );
}
