import React from 'react'
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";

export default function ToggleThemeButton({darkTheme,toggleTheme}) {
  return (
    <div className='toggleThemeBtn'>
        <button onClick={toggleTheme} className='themeBtn' style={{background:darkTheme?'white':'black'}}>
            {darkTheme?<HiOutlineSun />:<HiOutlineMoon color='white'/>}
        </button>
    </div>
  )
}
