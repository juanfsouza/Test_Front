import { useState } from "react";
import UserCard from "./UserCard";
import UserModal from "./UserModal";
import type { Props, User } from "@/types/user";

export default function UserList({ users }: Props) {
  const [selected, setSelected] = useState<User | null>(null);

  return (
    <>
      <div className="space-y-3">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() => setSelected(user)}
          />
        ))}
      </div>

      <UserModal user={selected} onClose={() => setSelected(null)} />
    </>
  );
}
