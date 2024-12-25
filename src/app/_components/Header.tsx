"use client"
import { useState, useEffect } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Film } from "lucide-react";
import { Search } from "lucide-react";

export const Header = () => {
    const [theme, setTheme] = useState(`light`);
    useEffect(() => {
        document.documentElement.classList.toggle(`dark`, theme === `dark`);
    }, [theme]);

    const toggleTheme = ()=> {
        setTheme(theme === `light` ? `dark` : `light`);
    }
return(
   <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
    <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100"><Film/> Movie Z</h1>
    
    <div className="flex items-center space-x-4">
    <button className="p-4 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-400">
        <Search />
        </button>
        <button onClick={toggleTheme} className="p-4 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-400">
            {theme === `light` ? <Sun/> : <Moon/>}
        </button>
    </div>
   </header>
)
}