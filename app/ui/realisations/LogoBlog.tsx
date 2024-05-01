import Image from "next/image"
export default function LogoMusic(){
    return (
        <>
         <div className="flex justify-center">
            <Image src={'/logo/logoBlog.png'} width={200} height={200} alt="Logo V2V Music"/>
        </div>
        
        </>
    )
}