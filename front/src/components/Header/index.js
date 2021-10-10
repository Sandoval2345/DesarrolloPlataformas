import React from "react";


export default function Header() {
    return (
        <div>
            <div className='bg-blue-800'>
              
                <h1 class="text-left text-white font-semibold text-2xl ">
                    Sistema Oferta Academica                   
                    <p class="text-sm">
                    Sonic heroes 
                    </p> 
                </h1>

                
                <div className="text-right text-white "> 
                    <nav >
                        <ol class = "space-x-4 ">
                            <a href="https://tongoy.ucn.cl/horario.php">Enlace Tongoy</a>
                            <a href="https://online.ucn.cl/onlineUcn/">Enlace Online Ucn</a>
                            <a href="https://eic.ucn.cl">Escuela de Ingenieria</a>
                            
                        </ol>  
                       
                    </nav>
                
                </div>
               
                
            </div>

           
        </div>
    )
}

