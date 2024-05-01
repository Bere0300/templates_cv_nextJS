import CardLogo from "@/app/ui/realisations/CardLogo"
export default function Logos(){

    return (
        <div className="container mx-auto mt-10 text-white">
            <h2 className="text-2xl font-bold mb-14 text-center uppercase underline underline-offset-4">Mes créations de logos</h2>
            <div className="flex flex-wrap justify-center">
                <CardLogo/>
           
            </div>
        </div>
        )
}