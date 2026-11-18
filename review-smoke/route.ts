import { findUser as getUser } from './users.js';

export function route(id: string) {
  const user = getUser(id);
  if (!user) return { status: 404 };
  return { status: 200, user };
}
