import React from 'react'
import { RiDribbbleFill, RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitchFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const SocialIocns = () => {
  return (
    <div className='flex gap-10 pr-4'>
        <Link to={'/'} className='text-[#FF0000] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill/></Link>
        <Link to={'/'} className='text-[#1F7BF2] text-2xl hover:-translate-y-1 transition-all duration-500'><RiFacebookFill/></Link>
        <Link to={'/'} className='text-[#B330B0] text-2xl hover:-translate-y-1 transition-all duration-500'><RiInstagramFill/></Link>
        <Link to={'/'} className='text-[#1C96E8] text-2xl hover:-translate-y-1 transition-all duration-500'><RiTwitterFill/></Link>
        </div>
  )
}

export default SocialIocns