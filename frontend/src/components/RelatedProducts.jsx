import React from 'react'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import LATEST from '../assets/latest'
import { RiShoppingCart2Line } from 'react-icons/ri';
const RelatedProducts = () => {
  return (
    <div>
        <h4 className='border-l-4 pl-2 border-secondary bold-20 '>Related Products</h4>
        {/* Container */}
        <div className='mx-auto max-w-full'>
            <Swiper 
            breakpoints={{
                600 :{
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024:{
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200:{
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }} 
            className='h-[122px] sm:h-[477px] mt-5'
            >
                {LATEST.map((item,i)=>(
                    <SwiperSlide key={i}>
                        <Link  onClick={window.scrollTo(0,0)} to={`/product/${item.id}`} className='flexCenter gap-x-5 bg-white backdrop:blur-md p-4 rounde-xl'>
                        <img src={item.image} className='rounded-lg drop-shadow-xl' height={77} width={77}></img>
                        <div className='flex flex-col gap-y-1'>
                            <h4 className='line-clamp-1 medium-16'>{item.name}</h4>
                            <p className='line-clamp-1'>Experience top-quality and innovation with our product, designed to enhance your everyday life.</p>
                      <div className='flexBetween'>
                        <div className='flexBetween gap-x-2 medium-16'>
                            <span>${item.new_price}.00</span>
                            <span className='line-through text-secondary'>${item.old_price}.00</span>
                        </div>
                        <RiShoppingCart2Line className='hover:text-secondary text-xl '/>
                      </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    </div>
  )
}

export default RelatedProducts