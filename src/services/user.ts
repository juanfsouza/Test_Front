import type { User } from "@/types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(): Promise<User[]> {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error("Falha buscar usuarios")
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
        throw new Error("Api invalida")
    }

    return data;
}