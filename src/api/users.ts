import type { User } from "@/types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers(): Promise<User[]> {
  const res = await fetch(API_URL);

  if (!res.ok) throw new Error("Erro ao buscar usuários");

  const data = await res.json();

  if (!Array.isArray(data)) throw new Error("Resposta da API inválida");

  return data;
}
