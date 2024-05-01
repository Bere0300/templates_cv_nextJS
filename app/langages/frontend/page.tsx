import CardFront from "@/app/ui/langages/cardFrond"
export default function frontend(){

    return (
    <div className="container mx-auto mt-10 text-white">
        <h2 className="text-2xl font-bold mb-14 text-center uppercase underline underline-offset-4">Mes langages front-End</h2>
        <div className="flex flex-wrap justify-center">
            <CardFront/>
       
        </div>
    </div>
    )
}