import CardInfo from "@/app/ui/accueil/CardInfo"
export default function Page(){
    return (
        <>
            <div className="flex justify-center w-full bg-home-background h-[20rem] shadow-xl shadow-purple-300">
                <div className="flex  flex-col justify-center text-center font-bold text-3xl text-white ">
                <h1 className="mb-4">Développeuse Web et web mobile</h1>
                <h1>Découvrez en plus sur moi et mes projets ...</h1>
                </div>
            </div>
            <div className="my-10">
                <CardInfo/>
            </div>
        </>
        )
}