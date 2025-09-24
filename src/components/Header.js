'use client'
//header file
import { motion } from 'framer-motion'
import { Button } from "./ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Menu, Globe, User } from 'lucide-react'

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-[#1A1A1D]/80 backdrop-blur-sm border-b border-[#C17817]/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C17817] to-[#E2B887] flex items-center justify-center">
              <span className="text-white text-xl font-bold">W</span>
            </div>
            <span className="text-[#E2B887] text-xl font-semibold">WingArrive</span>
          </motion.div>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#E2B887] hover:text-[#C17817]">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#2B2B2E] border-[#C17817]/20">
                <DropdownMenuItem className="text-[#E2B887]">English</DropdownMenuItem>
                <DropdownMenuItem className="text-[#E2B887]">Hindi</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Button */}
            <Button 
              variant="ghost" 
              className="text-[#E2B887] hover:text-[#C17817] flex items-center space-x-2"
            >
              <User className="h-5 w-5" />
              <span>Login</span>
            </Button>

            {/* Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#E2B887] hover:text-[#C17817]">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#2B2B2E] border-[#C17817]/20">
                <DropdownMenuItem className="text-[#E2B887]">Home</DropdownMenuItem>
                <DropdownMenuItem className="text-[#E2B887]">About</DropdownMenuItem>
                <DropdownMenuItem className="text-[#E2B887]">FAQ</DropdownMenuItem>
                <DropdownMenuItem className="text-[#E2B887]">Contact</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </motion.header>
  )
}