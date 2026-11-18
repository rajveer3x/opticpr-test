export function findUser(id: string) {
  const user = id === 'known' ? { id } : undefined;
  if (!user) {
    return undefined;
  }
  return user;
}
