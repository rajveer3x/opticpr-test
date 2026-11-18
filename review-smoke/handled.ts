import { findUser as getUser } from './users.js';

export function handledRoute(id: string) {
  try {
    const user = getUser(id);
    if (!user) return { status: 404 };
    return { status: 200, user };
  } catch {
    return { status: 404 };
  }
}
