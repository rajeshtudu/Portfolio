import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0"
        animate={{
          opacity: isDark ? 0 : 0.2,
          background: isDark 
            ? 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, hsl(45 100% 50% / 0.4) 0%, transparent 70%)',
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative w-5 h-5">
        {/* Sun icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Sun size={20} className="text-amber-500" />
        </motion.div>
        
        {/* Moon icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Moon size={20} className="text-primary" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;