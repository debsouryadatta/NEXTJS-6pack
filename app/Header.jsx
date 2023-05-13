import React from 'react'
import Link from 'next/link'



const Header = () => {
  return (
    <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
          <input type="text" placeholder='Search...' />
    </nav>
  )
}

export default Header