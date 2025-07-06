import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import Logo from '../utils/Logo';

const Header = () => {
    return(
        <header className="flex justify-between py-3 border">
            <Logo/>
            <div className="flex items-center">
                <input
                    className="border h-11 p-2 w-80 outline-none rounded-l-lg"
                    type="text"
                    placeholder="search any product here..."
                />
                <button className="bg-gray-300 h-11 w-15 pl-4 rounded-r-lg border cursor-pointer">
                    <IoSearchSharp size={30}/>
                </button>
            </div>
            <div className="flex gap-15 items-center">
                <MdOutlineShoppingCart size={30}/>
                <IoPersonSharp size={25}/>
            </div>
        </header>
    )
};

export default Header;