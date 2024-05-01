import Image from "next/image"
export default function CardFront(){
    return(
        <> 
        <div className="mx-10 mb-14 flex flex-col items-center">
            <Image src='/front/html.png' width={150} height={150} alt='Html'/>
            <h1 className="text-center mt-3">HTML 5</h1>
        </div>
        <div className="mx-10 mb-14 flex flex-col items-center">
            <Image src='/front/css.png' width={150} height={150} alt='Html'/>
            <h1 className="text-center mt-3">CSS</h1>
        </div>
        <div className="mx-10 mb-14 flex flex-col items-center">
            <Image src='/front/js.png' width={150} height={150} alt='Html'/>
            <h1 className="text-center mt-3">JavaScript</h1>
        </div>
        <div className="mx-10 mb-14 flex flex-col items-center">
            <Image src='/front/react.png' width={150} height={150} alt='Html'/>
            <h1 className="text-center mt-3">React.js</h1>
        </div>
        <div className="mx-10 mb-14 flex flex-col items-center">
            <Image src='/front/bootstrap.png' width={150} height={150} alt='Html'/>
            <h1 className="text-center mt-3">Bootstrap</h1>
        </div>
        <div className="mx-10 mb-14 flex flex-col items-center">
            <Image src='/front/tailwind.png' width={150} height={150} alt='Html'/>
            <h1 className="text-center mt-3">TailWind</h1>
        </div>
        <div className="mx-10 mb-14 flex flex-col items-center">
            <Image src='/front/twig.png' width={150} height={150} alt='Html'/>
            <h1 className="text-center mt-3">Twig</h1>
        </div>
       
        
        </>
    )
}