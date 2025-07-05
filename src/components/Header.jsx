import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

export const Header = () => {
    return(
        <header className="flex justify-between py-3 border">
            <div className="cursor-pointer" >
                <strong className="text-3xl">Electro<span className="text-blue-600">Kart</span></strong>
            </div>
            <div className="flex items-center">
                <input
                    className="border rounded-lg p-2 w-80 outline-none"
                    type="text"
                    placeholder="search any item here..."
                />
                <button className="bg-gray-300 h-10 w-15 pl-4 rounded-lg border cursor-pointer">
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

