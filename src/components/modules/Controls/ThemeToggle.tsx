'use client'
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes"
import { BsFillMoonFill } from "react-icons/bs"

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme()

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="transition-all duration-500 hover:scale-[1.2] hover:text-(--hover-color) cursor-pointer">
            {
                theme === 'dark' ? (
                    <BsSunFill className="w-4 h-4" />
                ) : (
                    <BsFillMoonFill className="w-4 h-4" />
                )
            }
        </button>
    )
}

export default ThemeToggle
