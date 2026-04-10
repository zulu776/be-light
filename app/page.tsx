"use client";
import InfoText from "@/components/Home/InfoText/page";
import PrincipalImagen from "@/components/Home/PrincipalImagen/page";
import ServiceText from "@/components/Home/ServiceText/page";

export default function Home() {
  return (
    <>
      <section className="w-screen">
        <PrincipalImagen />
      </section>

      <section className="w-screen bg-pageBase">
        <InfoText />
      </section>

      <section className="w-screen">
        <ServiceText />
      </section>
    </>
  );
}
