import React from "react";
import Navbar from "@/src/app/components/navbar/navbar";
import Footer from "@/src/app/components/footer/footer";

import Hero from './components/Hero'
import AbountUs from './components/AbountUs'
import FoodCategory from './components/FoodCategory'
import Items from './components/Items'
import MeetShef from './components/MeetShef'
import MenuItem from './components/MenuItem'
import RestaurantActive from './components/RestaurantActive'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials';
function Header() {
  return (
    <>
     
      <header className="w-full h-[50px] bg-black text-white flex justify-center items-center px-4">
        <h2 className="text-[24px] font-bold"><span className="text-[#FF9F0D]">Food</span>Tuck</h2>
      </header>

      <Navbar />
      <Hero />
    <AbountUs />
    <FoodCategory /> 
    <Items />

    <MenuItem />
    <MeetShef />
    
    <Testimonials />
    <RestaurantActive />
    <Blog />
    
      <Footer />
    </>
  );
}

export default Header;


 
