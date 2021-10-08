import React from 'react'

export default function Header() {
    return (
        <div>
            <nav className="bg-blue-500 shadow dark:bg-gray-800">
                <h1 className="text-left bg-blue-500 text-2xl font-normal leading-normal mt-0 mb-1 text-white">
                    <h1 classname="text-center"> Sistema Oferta Academica 2021 </h1>
                    <h2 className="text-left text-sm text-opacity-40 shadow-sm">Sonic Heroes</h2>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center"> 
                    <a class="mr-5 hover:text-gray-900">Tongoy</a>  
                    <a class="mr-5 hover:text-gray-900">Mi Portal</a>
                    <a class="mr-5 hover:text-gray-900">Oferta Academica</a>
                    </nav> 
                </h1>   
            </nav>  
        </div>
    )
}

