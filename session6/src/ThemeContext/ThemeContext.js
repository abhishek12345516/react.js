import { createContext,useContext, useState } from "react";

const ThemeContext = createContext();
function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(prev=>prev === 'light' ? 'dark' : 'light');
    }
    return ( 
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {/* <ThemeContext.Provider value={{theme, toggleTheme}}> */}
            {children}
        </ThemeContext.Provider>
     );
}

export default ThemeProvider;

export const useThemeContext =()=>{
    return useContext(ThemeContext);
}