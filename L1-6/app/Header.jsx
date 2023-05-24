// "use client";
import React from 'react'
import Link from 'next/link'
import SearchBar from '@/components/clients/SearchBar'


const Header = () => {
  // const [searchQuery, setSearchQuery] = useState('')

  return (
    <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        {/* <input value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} type="text" placeholder='Search...' /> */}
        <SearchBar />
    </nav>
  )
}

export default Header