import React from 'react'

function Nav() {
  return (
    <>
      <div className='w-full'>
        <nav className='w-full h-20 flex items-center justify-between px-12'>
          <img className='w-20 ' src="https://pngfre.com/wp-content/uploads/nike-logo-18.png" alt="" />
          <div className='w-96 flex justify-between text-lg text-black '>
            <a className='hover:text-red-500' href="">Menu</a>
            <a className='hover:text-red-500' href="">Location</a>
            <a className='hover:text-red-500' href="">About</a>
            <a className='hover:text-red-500' href="">Contact</a>
          </div>
          <button className='bg-red-400 rounded-md text-white hover:bg-red-600 cursor-pointer px-3 py-1'>Login</button>
        </nav>
      </div>
    </>
  )
}

export default Nav
