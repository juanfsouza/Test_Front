import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { UserCardProps } from "@/types/user";
import { motion } from "framer-motion";
import { Mail, UserIcon } from "lucide-react";

export default function UserCard({ user, onClick }: UserCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        onClick={() => onClick(user)}
        className="p-4 cursor-pointer hover:bg-accent transition rounded-xl shadow-sm"
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon size={18} />
            {user.name}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm">
            <Mail size={16} />
            {user.email}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
