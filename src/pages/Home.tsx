import type { User } from "@/types/user";
import { Input } from "@/components/ui/input";
import { getUsers } from "@/api/users";
import React, { useEffect, useState } from "react";
import UserList from "@/components/user/UserList";

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
        setUsers(data);
        setFiltered(data);
      } catch {
        setError("Erro ao carregar usuários");
      } finally {
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
      <h1 className="text-2xl font-bold">Lista de Usuários</h1>

      <Input
        placeholder="Buscar por nome..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />

      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && <UserList users={filtered} />}
    </div>
  );
}
