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
        <p>{titulo1}</p>
        <p>{titulo2}</p>
        <p>{texto}</p>
      </div>
    </>
  );
}
