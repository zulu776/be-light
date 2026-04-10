import Image from "next/image";

export default function PrincipalImagen() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="/isa/isa_pc.jpeg"
          alt="Hero Image"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </>
  );
}
