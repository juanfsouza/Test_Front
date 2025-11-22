import type { User } from "@/types/user";
import { Input } from "@/components/ui/input";
import { getUsers } from "@/api/users";
import React, { useEffect, useState } from "react";
import UserList from "@/components/user/UserList";
import { Skeleton } from "@/components/ui/skeleton";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getUsers();

        setTimeout(() => {
          setUsers(data);
          setFiltered(data);
          setLoading(false);
        }, 500);

      } catch {
        setError("Erro ao carregar usuários");
        setLoading(false);
      }
    }

    load();
  }, []);

  // filtra a cada mudança
  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, users]);

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <TextAnimate className="text-xl font-bold" animation="blurInUp" by="character" once>Lista de Usuários</TextAnimate>

      <Input
        placeholder="Buscar por nome..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />

      {loading && (
        <div className="space-y-3">
          {[1,2,3,4].map((i) => (
            <Skeleton key={i} className="h-16 w-full rounded-lg" />
          ))}
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && <UserList users={filtered} />}
    </div>
  );
}
