import Image from "next/image";
export default function Page() {
  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-14 text-center uppercase underline underline-offset-4">
        Mes langues
      </h1>

      <div className="flex flex-wrap justify-center items-center">
        <div className="m-5 flex flex-col items-center">
          <Image src={"/france.png"} width={100} height={100} alt="France" />
          <p className="italic">Langue maternelle</p>
        </div>
        <div className="m-5 flex flex-col items-center">
          <Image src={"/anglais.png"} width={110} height={110} alt="Anglais" />
          <p className="italic">Courant</p>
        </div>
        <div className="m-5 flex flex-col items-center">
          <Image src={"/espagne.png"} width={100} height={100} alt="Espagne" />
          <p className="italic">B2</p>
        </div>
        <div className="m-5 flex flex-col items-center">
          <Image src={"/italie.png"} width={100} height={100} alt="Italie" />
          <p className="italic">A1</p>
        </div>
      </div>
    </div>
  );
}
