"use client"
import Image from "next/image"

export default function Home() {
  
  return (
    <>
   

    <section className="w-screen">
      <div className="relative w-full h-screen">
        <Image 
        src="/isa/isa_pc.jpeg" 
        alt="Hero Image" 
        fill 
        className="object-cover object-top"
        priority />
      </div>
    </section>

<section className="w-screen bg-pageBase">  
  <div className=" w-4/5 mx-auto py-16  ">
    <p className="font-sans font-bold text-2xl text-textPrimary">Be Light</p>
    <p className="font-sans text-textPrimary text-lg py-2">Creemos que cada persona tiene una luz propia, una energía que al cuidarse, puede brillar con más fuerza.</p>
    <p className="font-sans text-textPrimary text-lg py-2">Be light es una invitación a que encuentres en cada elección un camino hacia tu bienestar, esencia y vitalidad.	</p>
    <p className="font-sans text-textPrimary text-lg py-2">Aquí no se trata de reglas o restricciones, sino de liberarte de la culpa y sentirte liviano, porque cada paso cuenta para descubrir la forma de cuidar tu cuerpo y mantener sereno tu espíritu. </p>
  </div>
</section>
   
 
    </>
  )
}

