import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Grandchild = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <h2>This is grandchild</h2>
            <p>Hello:</p>
            <p>Hello: {theme}</p>
            <button onClick={toggleTheme}>ToggleTheme</button>
        </>
    )
}
