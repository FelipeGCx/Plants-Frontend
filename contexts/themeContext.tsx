import { createContext, useEffect, useState } from "react";

interface IThemeContext {
  theme: string;
  toggleTheme?: () => void;
}

const defaultState = {
  theme: "light",
};

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext<IThemeContext>(defaultState);

// const ThemeContext = createContext();

const initialTheme = "light";

const ThemeProvider = (props:Props) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let lsTheme = localStorage.getItem("theme");
    if (lsTheme == null || lsTheme == undefined) {
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      localStorage.setItem("theme", prefers ? "dark" : "light");
      lsTheme = prefers ? "dark" : "light";
    }
    setTheme(lsTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme == "light" ? "light" : "dark");
    document.body.classList.remove("app-dark");
    document.body.classList.remove("app-light");
    document.body.classList.add(theme == "light" ? "app-light" : "app-dark");
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const data = { theme, toggleTheme };
  return <ThemeContext.Provider value={data}>{props.children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
