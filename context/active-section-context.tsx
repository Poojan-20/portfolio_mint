'use client';
import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setactiveSection:React.Dispatch<React.SetStateAction<SectionName>>
  timeoflastclick:number;
  settimeoflastclick:React.Dispatch<React.SetStateAction<number>>
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setactiveSection] = useState<SectionName>("Home");
  const [timeoflastclick,settimeoflastclick] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setactiveSection,timeoflastclick,settimeoflastclick }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext (){
    const context = useContext(ActiveSectionContext);
    if(context ===null ){
        throw new Error(
            'error for not using context ouside the provider'
        )
    }
    return context;
}
