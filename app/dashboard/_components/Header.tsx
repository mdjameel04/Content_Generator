import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
      <div className='flex items-center gap-2 border max-w-lg p-2 rounded-md bg-white'>
   <Search/>
   <input type='text' placeholder='search...' className='outline-none'/>
      </div>
<div>
  <h2 className='bg-purple-600 p-1 rounded-full text-xs text-white'> 🔥Join our Membership at just $6.99/month </h2>
</div>

    </div>
  )
}

export default Header