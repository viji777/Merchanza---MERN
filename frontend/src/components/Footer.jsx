import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import SocialIocns from './SocialIocns'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className='max-padd-container bg-tertiary py-8'>
      <div className='flexCenter flex-col gap-y-4'>
        {/* logo */}
        <Link to={"/"} className="flexCenter gap-x-2">
          <img src={logo} alt="logo img" height={31} width={31} />
          <span className=" text-white bold-24 hidden xs:flex">Merchanza</span>
        </Link>
        {/* Nav */}
        <div className='py-4'>
            <Navbar
              containerStyles={
                "flex gap-x-5 xl:gap-x-10 medium-15 text-white rounded-full px-2 py-4"
              }
            />
          </div>
          <SocialIocns/>
          <hr className='h-[1px] w-2/3 my-3'/>
          <div className='text-white'>Copy right &copy; Merchanza | All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer