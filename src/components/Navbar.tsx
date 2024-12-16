"use client";

import React, { useState } from "react";

const HeaderComponent = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <header className="border-b-2">
        {/* Top Bar */}
        <div className="flex items-center  border-b-2 justify-between h-18 px-8">
        
          
          <h1 className="text-lg font-Clash Display">Avion</h1>
          <div className="flex space-x-4">
            <img src="/cart.png" alt="Cart Icon" className="w-4 h-4  " />
            <img src="/account.png" alt="Account Icon" className="w-4 h-4  mr-8" />
            <img src="/search.png" alt="Search Icon" className="w-4 h-4  mr-8" />
            <button
              onClick={() => setMenuActive(!menuActive)}
              className="md:hidden focus:outline-none"
            >
              <img
                src="/menu.png"
                alt="Menu Icon"
                className="w-4 h-4 mr-8"
              />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuActive ? "block" : "hidden"
          } md:block border-t md:border-0 mt-4 md:mt-0`}
        >
         <div className="flex justify-center ">
         <ul className="list-none flex space-x-10 text-gray-500 mt-3 mb-3">
             <li>plant pots</li>
             <li>Ceramics</li>
            <li>Tables</li>
             <li>Chiars</li>
             <li>Crockery</li>
             <li>Tablewear</li>
             <li>Cutlery</li>
         </ul>
       </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;








