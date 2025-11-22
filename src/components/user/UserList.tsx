import { motion } from "framer-motion";
import { useState } from "react";
import UserCard from "./UserCard";
import UserModal from "./UserModal";
import type { Props, User } from "@/types/user";

export default function UserList({ users }: Props) {
  const [selected, setSelected] = useState<User | null>(null);

  return (
    <>
      <div className="space-y-3">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.08,
            }}
          >
            <UserCard
              user={user}
              onClick={() => setSelected(user)}
            />
          </motion.div>
        ))}
      </div>

      <UserModal user={selected} onClose={() => setSelected(null)} />
    </>
  );
}
