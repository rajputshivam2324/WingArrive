'use client'

import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaPlaneDeparture, FaExchangeAlt } from 'react-icons/fa'
import { useState } from 'react'
import Header from '@/components/Header'

export default function SearchPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A1D] to-[#2B2B2E] text-white">
      <Header />
      
      <div className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-light text-[#E2B887] mb-8 text-center">Find Your Flight</h2>
          
          <div className="bg-[#2B2B2E]/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-[#C17817]/20">
            <div className="space-y-6">
              {/* From/To Fields */}
              <div className="flex flex-col md:flex-row gap-4 relative">
                <div className="flex-1">
                  <label className="text-[#E2B887] text-sm mb-2 block">From</label>
                  <Input 
                    placeholder="Departure City" 
                    className="bg-[#1A1A1D] border-[#C17817]/30 h-12 text-lg placeholder:text-gray-500"
                  />
                </div>
                
                <motion.button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 md:static md:transform-none bg-[#C17817] p-2 rounded-full md:self-end md:mb-1"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaExchangeAlt className="text-white" />
                </motion.button>

                <div className="flex-1">
                  <label className="text-[#E2B887] text-sm mb-2 block">To</label>
                  <Input 
                    placeholder="Arrival City" 
                    className="bg-[#1A1A1D] border-[#C17817]/30 h-12 text-lg placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Date Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-[#E2B887] text-sm mb-2 block">Departure Date</label>
                  <Input 
                    type="date" 
                    className="bg-[#1A1A1D] border-[#C17817]/30 h-12 text-lg"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-[#E2B887] text-sm mb-2 block">Return Date</label>
                  <Input 
                    type="date" 
                    className="bg-[#1A1A1D] border-[#C17817]/30 h-12 text-lg"
                  />
                </div>
              </div>

              {/* Search Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="w-full bg-gradient-to-r from-[#C17817] to-[#E2B887] hover:from-[#E2B887] hover:to-[#C17817] text-white h-14 text-lg font-medium rounded-xl mt-4"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    animate={{ x: isHovered ? 10 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaPlaneDeparture className="text-xl" />
                    <span>Search Flights</span>
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}