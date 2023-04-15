import { writable, type Writable } from 'svelte/store';

export const auth: Writable<boolean> = writable(false);

export async function login(username: string, password: string) {
  const res = await fetch('http://localhost:3333/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  if (res.ok) {
    const data = await res.json();
    if (!data[0]) {
      auth.set(false);
      return false;
    } else {
      auth.set(true);
      return true;
    }
  }

  return false;
}
