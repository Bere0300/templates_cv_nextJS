import Image from "next/image"
export default function CardLogo(){
    return(
        <> 
        <div className="mx-10 mb-14 flex flex-col items-center">
            <Image src='/logo/v2vMusic.png' width={150} height={150} alt='Html'/>
            <h1 className="text-center mt-3">V2V Music</h1>
        </div>
        <div className="mx-10 mb-14 flex flex-col items-center">
            <Image src='/logoRea/disney.png' width={150} height={150} alt='Html'/>
            <h1 className="text-center mt-3">DisneySongUnivers</h1>
        </div>
        <div className=" mb-14 flex flex-col items-center">
            <Image src='/logoRea/tradhouse.png' width={450} height={0} alt='Html'/>
            <h1 className="text-center mt-3">TradHouse</h1>
        </div>
     
        </>
    )
}