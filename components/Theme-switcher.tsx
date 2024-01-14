'use client';

import React from 'react'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes"
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme ,resolvedTheme ,setTheme } = useTheme();
    useEffect(() => {
      setMounted(true);
      if (resolvedTheme === 'dark') {
        setTheme('dark');
      }
    }, [resolvedTheme, setTheme]);
    
      if (!mounted) {
        return null;
      }
  return (
    <button
    className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.05rem] border-[0.05rem] border-opacity-40 rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-20 shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,1)] dark:border-white border-black"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark' )
    }
  >
    {theme === "light" ? <BsSun /> : <BsMoon />}
  </button>
  )
}
