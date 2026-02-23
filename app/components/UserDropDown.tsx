"use client"

import { UserButton } from "@clerk/nextjs"
import { Home, Wallet } from "lucide-react"


const UserDropDown = () => {
    return(
  <div className='mt-1'>
       <UserButton>
      <UserButton.MenuItems>
        <UserButton.Link
          label="Home"
          labelIcon={<Home size={16} />}
          href="/"
        />
        <UserButton.Link
          label="Dashboard"
          labelIcon={<Wallet size={16} />}
          href="/dashboard"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>  
    </div>
  )
}

export default UserDropDown 