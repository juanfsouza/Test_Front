import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { UserCardProps } from "@/types/user";

export default function UserCard({ user, onClick }: UserCardProps) {
  return (
    <Card
      onClick={() => onClick(user)}
      className="p-4 cursor-pointer hover:bg-accent transition"
    >
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
    </Card>
  );
}
