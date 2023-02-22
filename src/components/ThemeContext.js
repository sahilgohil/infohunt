import React,{useState, createContext} from "react";

const ThemeProvider = createContext()

function ThemeContextProvider(props)
{

    const [theme,setTheme] = useState('light')

    function toggleTheme()
    {
        console.log('toggling')
    }

    return(
        <ThemeProvider.Provider value={{theme,toggleTheme}}>
            {props.children}
        </ThemeProvider.Provider>
    )
}
export {ThemeContextProvider, ThemeProvider}
