import Link from "next/link"
import SocialMedia from "../navBar/SocialMedia"
export default function Footer(){
    return (
    
        <div className="">
            <div className="flex flex-col justify-center items-center h-20 bg-purple-500 p-4 text-white ">
                <p className="text-l"> @BéréDev </p>
                <div className="m-2"><SocialMedia/></div>
            </div>
        </div>
        )
}