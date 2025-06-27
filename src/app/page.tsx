import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader } from "@/shared/ui/card";

export default async function Home() {
  const games = await prisma.game.findMany();

  console.log(games);
  return (
    <div>
      <Button size="lg" variant="outline">
        Hello
      </Button>
      {games.map((game) => (
        <Card key={game.id}>
          <CardHeader>{game.name}</CardHeader>
        </Card>
      ))}
    </div>
  );
}
