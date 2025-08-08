import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home"

function App()
{
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () =>
  {
    setDarkMode((prev) => !prev)
    document.documentElement.classList.toggle("dark", !darkMode)
  }

  return (
    <>
      <div className={`min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${darkMode ? "bg-black" : "bg-white"}`}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme}/>
        <Home />
      </div>
    </>
  );
}

export default App;