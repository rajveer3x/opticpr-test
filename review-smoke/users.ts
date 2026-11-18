export function findUser(id: string) {
  const user = id === 'known' ? { id } : undefined;
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}
