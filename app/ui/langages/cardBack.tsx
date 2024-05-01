import Image from "next/image"
export default function CardBack(){
    return(
        <> 
            <div className="mx-10 mb-14 flex flex-col items-center">
                <Image src='/back/symfony.png' width={150} height={150} alt='Html'/>
                <h1 className="text-center mt-3">Symfony</h1>
            </div>
            <div className="mx-10 mb-14 flex flex-col items-center">
                <Image src='/back/php.png' width={150} height={150} alt='Html'/>
                <h1 className="text-center mt-3">PHP</h1>
            </div>
            <div className="mx-10 mb-14 flex flex-col items-center">
                <Image src='/back/poo.png' width={150} height={150} alt='Html'/>
                <h1 className="text-center mt-3">Programmation Orienté Objet</h1>
            </div>
            <div className="mx-10 mb-14 flex flex-col items-center">
                <Image src='/back/sql.png' width={150} height={150} alt='Html'/>
                <h1 className="text-center mt-3">MySQL</h1>
            </div>
            <div className="mx-10 mb-14 flex flex-col items-center">
                <Image src='/back/admin1.png' width={150} height={150} alt='Html'/>
                <h1 className="text-center mt-3">PhPMyAdmin</h1>
            </div>
        </>
    )
}