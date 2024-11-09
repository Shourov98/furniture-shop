import React from 'react'
import HeroSlider from '../components/home/HeroSlider'
import Categories from '../components/home/Categories'

const Home = () => {
    
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className="w-full">
                <HeroSlider />
            </div>
            <div className="w-11/12">
                <Categories />
            </div>
        </div>
    )
    }

export default Home
