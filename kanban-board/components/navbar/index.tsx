import React, { useEffect, useState } from "react";
import { BsMoonStarsFill,BsSunFill  } from "react-icons/bs";
import Image from 'next/image';
import Logo from '../../icons/kanban.png'


const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("light", newTheme === "light");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.toggle("light", savedTheme === "light");
      setTheme(savedTheme);
    }
  }, []);
  return (
    <nav className="flex items-center justify-between px-[40px] py-[30px] navbar">
      <div className="flex gap-2">
      <Image src={Logo} alt="Kanban Logo" width={40} height={40} />
        <h3 className="text-3xl font-bold ">KanBan DashBoard</h3>
        </div>
     
      <button className="p-2" onClick={toggleTheme}>
        {theme === "light" ? <BsMoonStarsFill className='w-[30px] h-[30px]' /> : <BsSunFill className='w-[30px] h-[30px]' />}
      </button>
    </nav>
  );
};

export { Navbar };
