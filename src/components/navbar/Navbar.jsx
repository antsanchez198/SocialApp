import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <Link href="/feed">Feed</Link>
      <Link href="/search">Search</Link>
      <Link href="/post">Post</Link>
      <Link href="/profile">Profile</Link>
      <button>Log Out</button>
    </div>
  )
}

export default Navbar