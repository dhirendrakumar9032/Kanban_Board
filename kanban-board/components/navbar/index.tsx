import React, { useEffect, useState } from 'react'


const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
      };
    
      useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          document.documentElement.classList.toggle("dark", savedTheme === "dark");
          setTheme(savedTheme);
        }
      }, []);
  return (
    <nav className="flex items-center justify-between p-[40px] navbar">
    <h2>KanBan DashBoard</h2>
    <button className="p-2" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  </nav>
  )
}

export {Navbar}