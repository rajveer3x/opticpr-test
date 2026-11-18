commit ea3e1f1933b3b772ea757e0602937c5743c00e70
Author: OpticPR Fixture <fixture@opticpr.invalid>
Date:   Wed Nov 18 00:00:00 2026 +0000

    Throw on a missing user

diff --git a/src/users.ts b/src/users.ts
index 27604c2..916b018 100644
--- a/src/users.ts
+++ b/src/users.ts
@@ -1,7 +1,7 @@
 export function findUser(id: string) {
   const user = id === 'known' ? { id } : undefined;
   if (!user) {
-    return undefined;
+    throw new Error('User not found');
   }
   return user;
 }
