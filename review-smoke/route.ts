commit fb8a50ac04e25e4024e7450e46fc7d415c832560
Author: OpticPR Fixture <fixture@opticpr.invalid>
Date:   Wed Nov 18 00:00:00 2026 +0000

    Return undefined for a missing user

diff --git a/src/handled.ts b/src/handled.ts
new file mode 100644
index 0000000..cb3d429
--- /dev/null
+++ b/src/handled.ts
@@ -0,0 +1,11 @@
+import { findUser as getUser } from './users.js';
+
+export function handledRoute(id: string) {
+  try {
+    const user = getUser(id);
+    if (!user) return { status: 404 };
+    return { status: 200, user };
+  } catch {
+    return { status: 404 };
+  }
+}
diff --git a/src/route.ts b/src/route.ts
new file mode 100644
index 0000000..083130d
--- /dev/null
+++ b/src/route.ts
@@ -0,0 +1,7 @@
+import { findUser as getUser } from './users.js';
+
+export function route(id: string) {
+  const user = getUser(id);
+  if (!user) return { status: 404 };
+  return { status: 200, user };
+}
diff --git a/src/users.ts b/src/users.ts
new file mode 100644
index 0000000..27604c2
--- /dev/null
+++ b/src/users.ts
@@ -0,0 +1,7 @@
+export function findUser(id: string) {
+  const user = id === 'known' ? { id } : undefined;
+  if (!user) {
+    return undefined;
+  }
+  return user;
+}
