import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import {useEffect} from "react";
import { SectionName } from "./types";


export function useSectionInView(sectionName: SectionName,threshold=0.75) {
  const { ref, inView } = useInView({ threshold, });
  const { setactiveSection, timeoflastclick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeoflastclick > 1000) {
      setactiveSection(sectionName);
    }
  }, [inView, setactiveSection, timeoflastclick,sectionName]);
  return {
    ref,
  }
}
