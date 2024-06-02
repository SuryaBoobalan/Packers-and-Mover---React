import React from 'react'
import Logo from '../Images/Logo/PMA Logo.png'
function Header() {
    return (
    <div>
        <header class="pb-6 bg-white lg:pb-0 fixed w-full top-0 z-10 ">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
           
            <nav class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex">
                        <img class="w-auto h-8 lg:h-10" src={Logo} alt="" style={{height: '70px'}} />
                    </a>
                </div>
    
                <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                   
                    <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>
    
                  
                    <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
    
                <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                    <p href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Enterprise </p>
    
                    <p href="#" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Partners </p>
        
                    <p  class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" > Support </p>
                  
                </div>
    
               
            </nav>
    
       
           
        </div>
    </header>
    </div>
    
    )
}

export default Header




