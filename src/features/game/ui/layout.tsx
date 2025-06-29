import { Card, CardContent, CardHeader } from "@/shared/ui/card";

export function GameLayout({
  players,
  status,
  field,
}: {
  players?: React.ReactNode;
  status?: React.ReactNode;
  field?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>Tic Tac Toe 3x3</CardHeader>
      <CardContent className="flex flex-col gap-4">
        {players}
        {status}
        <div className="flex justify-center items-center">{field}</div>
      </CardContent>
    </Card>
  );
}
