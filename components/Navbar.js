import React from 'react';
import { useState } from 'react';

export const Menu = (e) => {
    const Menu = document.querySelector('ul');
      e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
    // const [active, setActive] = useState(false);
  
    // const handleClick = () => {
    //   setActive(!active);
    };

export default function Navbar() {
  return (
      <div className="">
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <nav className="bg-black p-2 shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between item-center">
        <img className="h-[10rem] inline" src="https://cdn.discordapp.com/attachments/843965095902183455/986371861589917726/Ga_Chun_Yau_Photography_Logo_v2.png" alt="" />

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
        <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>

        </div>
            <ul className="md:flex md:items-center">
                <li className="my-6 md:my-0">
                <a href="#"
            className="text-white py-2 px-4 font-[Poppins] text-xl hover:text-gray-300 duration-500"
            >Home</a>
                </li>
                <li className="my-6 md:my-0">
                <a href="#"
            className="text-white py-2 px-4 font-[Poppins] text-xl hover:text-gray-300 duration-500"
            >About</a>
                </li>
                <li className="my-6 md:my-0">
                <a href="#"
            className="text-white py-2 px-4 font-[Poppins] text-xl hover:text-gray-300 duration-500"
            >Services</a>
                </li>
                <li className="my-6 md:my-0">
                <a href="#"
            className="text-white py-2 px-4 font-[Poppins] text-xl hover:text-gray-300 duration-500"
            >Contact</a>
                </li>
            </ul>
       
       {/* <script>
    function Menu(e){
      
    }
  </script> */}
    </nav>
    </div>
  )
}
