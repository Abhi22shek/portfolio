@@ .. @@
       // Only run animation when dark theme is active
-      if (!document.documentElement.classList.contains('dark-theme')) {
+      if (!document.documentElement.classList.contains('dark')) {
         requestAnimationFrame(animate);
         return;
       }