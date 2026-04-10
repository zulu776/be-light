import ImagePlusText from "@/components/Utilies/ImagesPlusText/page";

export default function ServiceText() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-2/4 mx-auto py-16 ">
        <p className="py-4">Servicios</p>
        <p className="py-4 text-3xl text-center">
          Ofrecemos una amplia gama de servicios para satisfacer tus necesidades
        </p>
        <div className="flex py-6">
          <div className={`ServiceTextHome`}>
            <ImagePlusText
              imagen="/isa/isa_pc.jpeg"
              alt="Service 1"
              titulo1="Servicio 1"
              titulo2="Servicio 2"
              texto="Descripción del servicio"
            />
          </div>
          <div className={`ServiceTextHome`}>
            <ImagePlusText
              imagen="/isa/isa_pc.jpeg"
              alt="Service 1"
              titulo1="Servicio 1"
              titulo2="Servicio 2"
              texto="Descripción del servicio"
            />
          </div>
          <div className={`ServiceTextHome`}>
            <ImagePlusText
              imagen="/isa/isa_pc.jpeg"
              alt="Service 1"
              titulo1="Servicio 1"
              titulo2="Servicio 2"
              texto="Descripción del servicio"
            />
          </div>
        </div>
      </div>
    </>
  );
}
