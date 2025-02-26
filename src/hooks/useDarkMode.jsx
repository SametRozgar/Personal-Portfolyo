import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.querySelector("#links_navbar").classList.add("dark-content")
    } else {
      document.documentElement.classList.remove("dark");
      document.querySelector("#links_navbar").classList.remove("dark-content")
    }
  }, [isDarkMode]);
  return [isDarkMode, setIsDarkMode];
}
