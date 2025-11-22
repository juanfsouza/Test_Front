import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { UserModalProps } from "@/types/user";
import { motion } from "framer-motion";

export default function UserModal({ user, onClose }: UserModalProps) {
  if (!user) return null;

  return (
    <Dialog open={!!user} onOpenChange={onClose}>
      <DialogContent className="rounded-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <DialogHeader>
            <DialogTitle className="underline text-xl">{user.name}</DialogTitle>
          </DialogHeader>

          <div className="space-y-2 text-sm mt-5">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Telefone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>

            <div>
              <p><strong>Empresa:</strong> {user.company.name}</p>
            </div>

            <div>
              <strong>Endereço:</strong>
              <p>
                {user.address.street}, {user.address.suite}<br />
                {user.address.city} - {user.address.zipcode}
              </p>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
