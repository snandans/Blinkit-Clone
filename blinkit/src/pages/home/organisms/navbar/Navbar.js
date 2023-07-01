import React from 'react'
import navItems from './constants/navbar.navItems'
import Link from '../../../../atoms/Link'
import '../../../../styles/style.css'
export default function Navbar() {
  return (
    <div className="belowNav flex flex__center__main-axis">
      {
        navItems.map((navItem) =>
        (<Link to="/" className="">
          {navItem}
        </Link>
        ))
      }
    </div>
  )
}
