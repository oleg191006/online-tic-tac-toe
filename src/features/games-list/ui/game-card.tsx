import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

export default function GameCard({
  login,
  rating,
  actions,
}: {
  login: string;
  rating: number;
  actions: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Організатор: {login}</CardTitle>
      </CardHeader>
      <CardContent>Рейтинг:{rating}</CardContent>
      <CardFooter>{actions}</CardFooter>
    </Card>
  );
}
