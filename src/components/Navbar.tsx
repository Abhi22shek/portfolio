@@ .. @@
 import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
 import { motion, AnimatePresence } from 'framer-motion';
 import { TbHelmetOff } from 'react-icons/tb';
-import ThemeToggle from './ThemeToggle';
+import { useTheme } from 'next-themes';
+import { FaSun, FaMoon } from 'react-icons/fa';

 const Navbar = () => {
@@ .. @@
   const [isScrolled, setIsScrolled] = useState(false);
   const [activeSection, setActiveSection] = useState('home');

+  const { theme, setTheme } = useTheme();
+  const [mounted, setMounted] = useState(false);
+
+  useEffect(() => setMounted(true), []);
+
   useEffect(() => {
@@ .. @@
             {/* Enhanced Desktop Navigation */}
             <div className="hidden md:flex items-center space-x-2">
               {navLinks.map((link, index) => (
@@ .. @@
                 </motion.button>
               ))}
+              
+              {/* Theme Toggle */}
+              {mounted && (
+                <motion.button
+                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
+                  className="relative p-3 text-gray-300 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10 ml-4"
+                  whileHover={{ scale: 1.1 }}
+                  whileTap={{ scale: 0.9 }}
+                  aria-label="Toggle theme"
+                >
+                  <motion.div
+                    animate={{ rotate: theme === 'dark' ? 0 : 180 }}
+                    transition={{ duration: 0.3 }}
+                  >
+                    {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
+                  </motion.div>
+                </motion.button>
+              )}
             </div>

             {/* Enhanced Mobile Menu Button */}
@@ .. @@
                   </motion.button>
                 ))}
               </div>

-              {/* Mobile Menu Footer */}
+              {/* Mobile Menu Footer with Theme Toggle */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}
                 className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-500/20"
               >
+                {/* Theme Toggle for Mobile */}
+                {mounted && (
+                  <div className="flex justify-center mb-4">
+                    <motion.button
+                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
+                      className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
+                      whileHover={{ scale: 1.05 }}
+                      whileTap={{ scale: 0.95 }}
+                    >
+                      <motion.div
+                        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
+                        transition={{ duration: 0.3 }}
+                      >
+                        {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
+                      </motion.div>
+                      <span className="text-white text-sm">
+                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
+                      </span>
+                    </motion.button>
+                  </div>
+                )}
+                
                 <div className="text-center">
                   <p className="text-sm text-gray-400 mb-2">Let's connect</p>
                   <div className="flex justify-center space-x-4">
@@ .. @@
           </>
         )}
-{/* Theme toggle component removed due to undefined reference */}
-       
       </AnimatePresence>
     </>
   );