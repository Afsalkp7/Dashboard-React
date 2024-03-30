import React, { useState } from 'react'
import SearchBox from './SearchBox'
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { MdLegendToggle } from "react-icons/md";
export default function MainNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav>
    <div className="navMain">
      <div className="navLogoSection">
        <div className="logoDiv">
          <span className="navLogo">Products</span>
        </div>
        <div className="navContentSection">
          <div className="navItems">
            <span className="navList"><SearchBox /></span>
            <span className="navList"><IoSettingsOutline /></span>
            <span className="navList"><LuMessagesSquare /></span>
          </div>
        </div>
        <div className="toggleDiv">
          <button onClick={toggleMenu} className="toggleButton">
            <MdLegendToggle />
          </button>
        </div>
      </div>
    </div>
    <div className={`${isOpen ? 'blockNav' : 'hiddenNav'} sizeNav`}>
      <div className="navMdItems">
        <span className="navMdList"><SearchBox /></span>
        <span className="navMdList">
            
                <IoSettingsOutline className='iconsNav'/>
            
        </span>
        <span className="navMdList">
            
                <LuMessagesSquare className='iconsNav'/>
            
        </span>
      </div>
    </div>
  </nav>
  )
}
