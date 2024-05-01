
import Image from "next/image"
export default function SocialMedia(){
    return (
        <div className="flex">
          <a href="https://github.com/Bere0300" target='_blank'>
            <Image
             src="/github.png"
             width={40}
             height={40}
             alt="GiHub"
            
            />
          </a>
          <a href="https://www.linkedin.com/in/b%C3%A9r%C3%A9nice-jarry/" target="_blank">
            <Image
             src="/linkedin.png"
             width={40}
             height={40}
             alt="GiHub"
            
            />
          </a>
        </div>
    )
}