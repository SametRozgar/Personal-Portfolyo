import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return [isDarkMode, setIsDarkMode];
}
