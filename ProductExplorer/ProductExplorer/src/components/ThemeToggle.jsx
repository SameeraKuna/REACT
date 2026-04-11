import React from 'react'

const ThemeToggle = ({theme, setTheme}) => {
  return (
    <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}

export default ThemeToggle