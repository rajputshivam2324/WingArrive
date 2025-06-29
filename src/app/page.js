// file is client component
'use client'  

import { motion } from 'framer-motion' // importing motion from framer motion library basically used when we are implementing animations
import Header from '@/components/Header' // Yeh Uppar ka header file hai jo ki component folder mein banaya hai yaha import kar rahe hai
import { ChevronDown } from 'lucide-react' // yeh ek scroll down icon hai jo ham lucid react se import kar rahe hai
import { useRouter } from 'next/navigation' // yeh ek tarike ka hook hota hai jo ki client side navigation mein kaam aata hai . 
// Hook - React Hooks are tools that allow you to use state and other React features without writing class components.

export default function Home() {
  const router = useRouter();

  const scrollToSearch = () => {
    router.push('/search');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1D] to-[#2B2B2E] text-white relative overflow-hidden">
      <Header />
      
      {/* Hero Section with City Backdrop */}
      <div className="relative h-screen">
        {/* Misty Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1D]/70 to-[#1A1A1D]" />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-[url('/city-backdrop.jpg')] bg-cover bg-center"
          style={{ filter: 'brightness(0.4)' }}
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[#E2B887] text-xl mb-6"
          >
            INTRODUCING
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-6xl sm:text-8xl font-light tracking-[0.5em] text-white mb-8"
          >
            WINGARRIVE
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-[#E2B887] text-xl font-light tracking-wider mb-12"
          >
            Beyond Horizons, Horizons Within Reach
          </motion.p>

          {/* Scroll Down Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            onClick={scrollToSearch}
            className="absolute bottom-20 cursor-pointer"
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center space-y-4"
            >
              <p className="text-[#E2B887] text-sm tracking-widest">SCROLL TO EXPLORE</p>
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-2 rounded-full border border-[#E2B887] opacity-50"
                />
                <div className="relative">
                  <motion.div
                    animate={{
                      y: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex flex-col items-center space-y-1"
                  >
                    <ChevronDown className="w-6 h-6 text-[#E2B887]" />
                    <ChevronDown className="w-6 h-6 text-[#E2B887] -mt-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}