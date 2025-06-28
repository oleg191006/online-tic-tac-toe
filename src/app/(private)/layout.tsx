import { sessionService } from "@/entities/user/server";
import { Button } from "@/shared/ui/button";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = await sessionService.verifySession();
  if (!session) {
    return;
  }
  return (
    <div>
      <header className="px-10 py-4 flex flex-row gap-4 justify-between border-b border-b-primary/50">
        <div className="text-xl">Tic-tac-toe-online</div>
        <div className="flex items-center justify-between">
          <div className="text-lg px-4">{session.login}</div>
          <form
            action={async () => {
              "use server";
              sessionService.deleteSession();
              redirect("/sign-in");
            }}
          >
            <Button>Sign Out</Button>
          </form>
        </div>
      </header>
      {children}
    </div>
  );
}
