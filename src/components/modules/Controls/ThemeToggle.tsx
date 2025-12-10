'use client'
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes"
import { BsFillMoonFill } from "react-icons/bs"

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme()

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="transition-[scale,color] duration-500 hover:scale-[1.1] hover:text-(--hover-color) cursor-pointer">
            {
                theme === 'dark' ? (
                    <BsSunFill className="size-4" />
                ) : (
                    <BsFillMoonFill className="size-4" />
                )
            }
        </button>
    )
}

export default ThemeToggle
