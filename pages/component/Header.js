import React from 'react';
import Image from "next/image";
import logo from '/public/LakshmipursWomen1.png'
import { MenuIcon, SearchIcon, ShoppingCartIcon, PhoneIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/outline";
const Header = () => {
    return (
        <header>
            {/* Top Nav */}
            <nav className="flex  items-center h-16  bg-white p-1 flex-grow py-2">
                <div className="text-blue flex items-center flex-grow sm:flex-grow-0 hover:border border-indigo-600">
                    <Image src={logo} width={140} height={50} objectFit="contain" className="cursor-pointer rounded-lg" alt="logo" />
                </div>
                {/* search */}
                <div className="hidden sm:flex  items-center shadow-2x rounded-md  border cursor-pointer ">
                    <SearchIcon className="h-6 text-gray-500 px-4" />
                    <input type="text" placeholder="Search Products" className=" rounded-l-md focus:outline-none pr-28" />

                    <button className="py-3  px-10 h-full rounded-r-md text-white bg-women_primary font-bold">Search</button>
                </div>



                {/* Right */}
                <div className="flex items-center text-gray-500  text-md space-x-6 mx-2">

                    <div className="link flex items-center hover:text-blue-600">
                        <PhoneIcon className="h-16 py-4" />
                        <p className="font-extrabold md:text-md">Call: +880 1756327272 </p>
                    </div>
                    <div className="flex items-center hover:text-blue-600">
                        <UserCircleIcon className="h-10" />
                        <p className="font-extrabold md:text-md" >  My Account</p>
                    </div>
                    <div className="relative link flex items-center hover:text-blue-600">
                        <span className="absolute top-0 right-0 md-right h-4 w-4 bg-yellow-400 text-center rounded-full text-black  font-bold">
                            4
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                            Cart
                        </p>
                    </div>
                </div>
            </nav>

            {/* search for mobile*/}
            <div className="md:hidden  flex  items-center shadow-2x rounded-md  border cursor-pointer my-1 mx-2">
                <SearchIcon className="h-6 text-gray-500 px-4" />
                <input type="text" placeholder="Search Products" className=" rounded-l-md focus:outline-none pr-32" />

                <button className="py-3  px-12 h-full rounded-r-md text-white bg-women_primary font-bold">Search</button>
            </div>

            {/* Bottom Nav */}
            <div className="flex items-center bg-women_primary  space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-lg">
                <p className='link flex items-center'>
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Home</p>
                <p className="link">Borkha</p>
                <p className="link">Three Pices</p>
                <p className="link">Lehenga</p>
                <p className="link hidden lg:inline-flex">Saree</p>
                <p className="link hidden lg:inline-flex">Jacket</p>
                <p className="link hidden lg:inline-flex">Offers</p>
                <p className="link hidden lg:inline-flex">Explore</p>

            </div>
        </header >
    );
};

export default Header;