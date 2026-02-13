import { createContext,useState } from "react";
export const ThemeContext = createContext();
export function ThemeProvider({children}){
    const [theme,setTheme] = useState('light');
    function toggleTheme(){
        setTheme(prev =>(prev == 'light'? 'darK' : 'light'))
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
// npm create vite@latest
src->component
