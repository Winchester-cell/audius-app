'use client'
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes"
import { BsFillMoonFill } from "react-icons/bs"

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme()

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="neu__norm p-3 rounded-full transition-all duration-500 hover:bg-(--hover-color) hover:scale-[1.2] hover:text-white cursor-pointer">
            {
                theme === 'dark' ? (
                    <BsSunFill className="w-5 h-5" />
                ) : (
                    <BsFillMoonFill className="w-5 h-5" />
                )
            }
        </button>
    )
}

export default ThemeToggle
