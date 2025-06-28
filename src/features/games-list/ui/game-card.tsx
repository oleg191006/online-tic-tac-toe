import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export default async function GameCard({
  login,
  rating,
}: {
  login: string;
  rating: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Організатор: {login}</CardTitle>
      </CardHeader>
      <CardContent>Рейтинг:{rating}</CardContent>
    </Card>
  );
}
