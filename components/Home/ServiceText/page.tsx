import ImagePlusText from "@/components/Utilies/ImagesPlusText/page";

export default function ServiceText() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-2/4 mx-auto py-16 ">
        <p className="py-4">Servicios</p>
        <p className="py-4 text-3xl text-center">
          Ofrecemos una amplia gama de servicios para satisfacer tus necesidades
        </p>
        <div className="flex flex-col md:flex-row  py-6">
          <div className={`ServiceTextHome`}>
            <ImagePlusText
              imagen="/isa/isa_pc.jpeg"
              alt="Service 1"
              titulo1="UNO"
              titulo2="NUTRICIÓN"
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat."
            />
          </div>
          <div className={`ServiceTextHome`}>
            <ImagePlusText
              imagen="/isa/isa_pc.jpeg"
              alt="Service 1"
              titulo1="DOS"
              titulo2="CONSULTA ONLINE"
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat."
            />
          </div>
          <div className={`ServiceTextHome`}>
            <ImagePlusText
              imagen="/isa/isa_pc.jpeg"
              alt="Service 1"
              titulo1="TRES"
              titulo2="CHARLAS"
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat."
            />
          </div>
        </div>
      </div>
    </>
  );
}
