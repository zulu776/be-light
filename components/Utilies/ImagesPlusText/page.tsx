import Image from "next/image";

export default function ImagePlusText({
  imagen,
  alt,
  titulo1,
  titulo2,
  texto,
}: {
  imagen: string;
  alt: string;
  titulo1: string;
  titulo2: string;
  texto: string;
}) {
  return (
    <>
      <div className="w-[300px] flex flex-col items-center justify-center">
        <Image
          src={imagen}
          alt={alt}
          width={500}
          height={500}
          className="object-cover object-top w-[200px] h-[200px]"
          priority
        />
        <p className="text-sm py-2 font-thin text-textPrimary">{titulo1}</p>
        <p className="text-2xl py-2 font-thin">{titulo2}</p>
        <p className="text-base py-2 font-thin">{texto}</p>
      </div>
    </>
  );
}
