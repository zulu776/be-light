"use client"
import Image from "next/image"

export default function About() {
    return (
        <div className="w-full">
            {/* Section 1 */}
            <section className="flex flex-col md:flex-row min-h-screen">
                <div className="relative w-full md:w-1/2 h-[40vh] md:h-auto">
                    <Image
                        src="/isa/isa2.jpeg"
                        alt="Section 1"
                        className="flex w-full h-full object-cover object-top"
                        fill
                        priority
                    />
                </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 bg-textPrimary px-2">
                    <div>
                        <p className="About-class">
                            Mi camino en la nutrición empezó desde la medicina, pero también desde una motivación interna: 
                            entender el cuerpo más allá de los síntomas y acompañar la salud de una forma más completa y cercana.
                        </p>
                        <p className="About-class">
                            Soy médica egresada de la Universidad CES y desde el inicio tuve algo muy claro: tomar decisiones bien 
                            fundamentadas. Por eso me formé en epidemiología clínica y práctica basada en la evidencia en la Universidad 
                            Pontificia Bolivariana, fortaleciendo mi enfoque en toma de decisiones respaldadas por ciencia, no por tendencias.
                        </p>
                        <p className="About-class">
                            Con el tiempo entendí que la salud no se construye solo desde lo clínico, sino también desde lo que comemos y cómo 
                            vivimos. Esto me llevó a hacer un máster en nutrición y salud en la Universidad Internacional de Valencia, y luego a 
                            profundizar en un enfoque más integral con estudios en medicina funcional en proceso de certificación por el Institute for 
                            Funcional Medicine.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="flex flex-col md:flex-row min-h-screen">
                <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 bg-textSecondary">
                    <div>
                      
                        <p className="About-class">
                            Pero más allá de los títulos, mi propósito ha cambiado: hoy no trabajo con dietas rígidas ni soluciones rápidas o temporales. 
                            Trabajo acompañando procesos reales. Creo que la nutrición no debería sentirse como una carga, sino como una forma de vivir con 
                            más energía, claridad y bienestar. Por eso mi enfoque es personalizado, basado en evidencia y adaptado a la vida real de cada persona.
                        </p>
                        <p className="About-class">
                            Acompaño especialmente procesos de recomposición corporal, salud digestiva y mejora de hábitos, integrando la ciencia con una 
                            mirada más humana de la salud, porque al final, no se trata solo de lo que comes, sino de la relación que construyes contigo y 
                            es ahí donde empieza el verdadero cambio.
                        </p>
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 h-[40vh] md:h-auto">
                    <Image
                        src="/isa/isa4.jpeg"
                        alt="Section 2"
                        className="w-full h-full object-cover object-top"
                        fill
                        priority
                    />
                </div>
            </section>
        </div>
    );
}