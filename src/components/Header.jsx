import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import Logo from '../utils/Logo';

const Header = () => {
    return(
        <header className="flex justify-between px-24 py-3 sticky top-0 z-[999] bg-white shadow-[0_8px_10px_rgba(106,109,159,0.2)]">
            <Logo/>
            <div className="flex items-center">
                <input
                    className="border h-11 p-2 w-80 outline-none rounded-l-lg"
                    type="text"
                    placeholder="search any product here..."
                />
                <button className="bg-gray-200 h-11 w-15 pl-4 rounded-r-lg border cursor-pointer">
                    <IoSearchSharp size={30}/>
                </button>
            </div>
            <div className="flex gap-15 items-center">
                <MdOutlineShoppingCart className="cursor-pointer" size={30}/>
                <IoPersonSharp className="cursor-pointer" size={25}/>
            </div>
        </header>
    )
};

export default Header;