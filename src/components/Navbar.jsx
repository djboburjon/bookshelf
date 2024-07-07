import React from 'react'

function Navbar() {
  return (
    <div className='container m-auto flex items-center justify-between py-3'>
      <div className='flex items-center gap-5'>
        <img src="/images/logo.png" alt="Logo" />
        <label htmlFor="" className='flex items-center gap-2'>
          <img src="/images/search-refraction.png" alt="Search" />
          <input type="text" className='w-64 bg-transparent border-none hover:border-none text-white px-2' placeholder='Search for any training you want' />
        </label>
      </div>
      <div className='flex items-center gap-4'>
        <img src="/images/ring.png" alt="Notify Ring" />
        <img src="/images/user-image.png" alt="User Logo" />
      </div>
    </div>
  )
}

export default Navbar