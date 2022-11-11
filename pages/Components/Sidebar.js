import Image from 'next/image'
import React from 'react'
import {ImUsers} from "react-icons/im"
import logo from '../images/logo.png'
import Sidebaritem from '../Components/Sidebaritem'
import { MdGroups,MdOutlineOndemandVideo,MdOutlineExpandMore } from 'react-icons/md'
import { AiOutlineShop } from 'react-icons/ai'
import {BsStopwatch} from 'react-icons/bs'


const Sidebar = () => {
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2
    max-w-xl lg:min-w-[302px]'>
     <div className='flex items-center space-x-2 py-3 px-4 pl-4 hover:bg-gray-400 cursor-pointer'>
       <Image className='rounded-full cursor-pointer' src={logo} height={40} width={40} />
        <p className='hidden sm:inline-flex '>Asif</p>
     </div>
     <Sidebaritem Icon={ImUsers} value="Friends" />
     <Sidebaritem Icon={MdGroups} value="Groups" />
     <Sidebaritem Icon={AiOutlineShop} value="MarketShop" />
     <Sidebaritem Icon={MdOutlineOndemandVideo} value="Watch" />
     <Sidebaritem Icon={BsStopwatch} value="Memories" />
     <Sidebaritem Icon={MdOutlineExpandMore} value="See More" />
    </div>
  )
}

export default Sidebar
