import React from 'react'
import { Link } from 'react-router-dom'
import RelatedProducts from './RelatedProducts'


const Hero = () => {
  return (
    <section>
        <div className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[744px] w-full'>
            <div className='relative top-24 xs:top-32'>
                <h4 className='uppercase medium-18 tracking-wider'>TRENDY TREASURES</h4>
                <h2 className='h1 capitalize max-w-[40rem]'>Elevate Your Look<span className='text-secondary'>With Every Click.</span>Shop Today!</h2>
                <p className='my-5 max-w-[33rem]'>"Discover Merchanza, where quality meets convenience in our wide array of products, from fashion to electronics, ensuring a seamless online shopping experience with top-notch customer service."</p>
           {/* buttons */}
           <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl'>
            <div className='text-center regular-14 leading-tight pl-5 '>
                <h5 className='uppercase font-bold'>30% OFF</h5>
                <p className='regular-14'>On All items</p>
            </div>
            <Link to={''} className='btn-dark rounded-xl flexCenter !py-5 '>Shop Now</Link>
           </div>
           {/* New Collections */}
           <div className='mt-10'>
            <RelatedProducts/>
           </div>
            </div>
        </div>
    </section>
  )
}

export default Hero