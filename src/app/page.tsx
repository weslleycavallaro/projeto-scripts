"use client"

import Image from "next/image";
import Logo from "../../public/logo.png";
import Porschegt3 from "../../public/porschegt3.jpg"
import Porscheturbo from "../../public/porsche911.jpg"
import Bmw from "../../public/bmwm4.jpg"
import Mclaren from "../../public/mclaren.jpg"

export default function Home() {


  return (
      <main className="flex flex-col w-full h-auto overflow-y-auto bg-neutral-800">

        <div className="relative flex justify-center w-full items-center bg-[url('../../public/bg.jpg')] bg-cover bg-center h-auto">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 justify-center p-64 h-auto">
            <h1 className="text-3xl sm:text-5xl text-white font-semibold">Um novo conceito de veiculo</h1>
            <hr className="my-2 border-t-2 border-stone-400"></hr>
            <h2 className="text-3xl sm:text-2xl text-white font-semibold">Desfrute de uma esperiencia inovadora</h2>
          </div>
        </div>

        <div className="flex w-full justify-center bg-neutral-800 p-4">
          <h2 className="text-2xl font-semibold">DESTAQUES</h2>
        </div>

        <div id="painel" className="flex flex-col sm:flex-row bg-neutral-800 justify-center gap-4 m-4">
          
          <div className="flex flex-col items-center bg-white rounded-sm">   
              <div className='p-4 flex flex-col gap-4 items-center'>
                  <p className='text-neutral-800  w-auto font-bold text-lg'>Porsche 911 GT3 RS</p>
                  <Image src={Porschegt3} alt="Logo" className="w-40 h-auto"/>
                  <p className='text-black w-auto text-start text-sm' >R$ 1.920.000</p>
              </div> 
          </div>

          <div className="flex flex-col items-center bg-white rounded-sm">   
              <div className='p-4 flex flex-col gap-4 items-center'>
                  <p className='text-neutral-800  w-auto font-bold text-lg'>Porsche 911 Turbo S</p>
                  <Image src={Porscheturbo} alt="Logo" className="w-40 h-auto"/>
                  <p className='text-black w-auto text-start text-sm' >R$ 1.795.000</p>
              </div> 
          </div>

          <div className="flex flex-col items-center bg-white rounded-sm">   
              <div className='p-4 flex flex-col gap-4 items-center'>
                  <p className='text-neutral-800  w-auto font-bold text-lg'>BMW M4</p>
                  <Image src={Bmw} alt="Logo" className="w-40 h-auto"/>
                  <p className='text-black w-auto text-start text-sm' >R$ 1.399.000</p>
              </div> 
          </div>

          <div className="flex flex-col items-center bg-white rounded-sm">   
              <div className='p-4 flex flex-col gap-4 items-center'>
                  <p className='text-neutral-800  w-auto font-bold text-lg'>McLaren 720s</p>
                  <Image src={Mclaren} alt="Logo" className="w-40 h-auto"/>
                  <p className='text-black w-auto text-start text-sm' >R$ 3.650.000</p>
              </div> 
          </div>

        </div>
        
        

      </main>

  );
}
