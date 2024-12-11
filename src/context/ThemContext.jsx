import React,{createContext} from "react"


export const ThemeContext = createContext(undefined);


function ThemContextprovidor({children,mode}) {
  return (
    <ThemeContext.Provider value={mode}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemContextprovidor


