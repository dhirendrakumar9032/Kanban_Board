import React, { useEffect, useState } from "react";
import { BsMoonStarsFill,BsSunFill  } from "react-icons/bs";


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
    <nav className="flex items-center justify-between px-[40px] py-[30px] navbar">
      <h3 className="text-3xl font-bold ">KanBan DashBoard</h3>
      <button className="p-2" onClick={toggleTheme}>
        {theme === "light" ? <BsMoonStarsFill className='w-[30px] h-[30px]' /> : <BsSunFill className='w-[30px] h-[30px]' />}
      </button>
    </nav>
  );
};

export { Navbar };
