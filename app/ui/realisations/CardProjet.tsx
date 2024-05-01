import LogoMusic from "./LogoMusic";

export default function CardProjet(){

    return (
        <>
                <h1 className="underline underline-offset-4 text-center uppercase text-xl mb-4">Mon projet V2V Music</h1>
                <LogoMusic/>
                <p className="text-justify m-5">
                    J&apos;ai construit mon projet V2V Music pour mon passage oral à ma certification de développeur Web et Web mobile. 
                    V2V Music est une plateforme d&apos;éoute de musique d&apos;artistes indépendants. Ces artistes sont des perosnnes de tout âges, de tout mileu, 
                    qui ont un poit commun : <strong>la musique</strong>. Créé ce projet V2V Music était un défi pour moi mais aussi une chance de pouvoir construire un site complet, avec un backOffice et de l&apos;intéractivité.
                    Sur le site V2V Music, de fausses données ont été entrée afin d&apos;avoir un visuel du site
                </p>
                <div className="flex justify-center">
                    <a href="https://v2vmusic.fr/" className="bg-purple-200 px-5 py-3 rounded text-black ring-4 ring-purple-400 hover:ring-offset-2"  target='_blank'>Visiter V2V Music</a>
                </div>
                <div className="mx-5 my-10 flex flex-wrap justify-evenly">
                    <div>
                        <h2 className="underline underline-offset-4 uppercase text-xl mb-4 ">Langages utilisés Front-End</h2>
                        <ul className="list-disc px-4">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Twig</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="underline underline-offset-4 uppercase text-xl mb-4 ">Langages utilisés Back-End</h2>
                        <ul className="list-disc px-4">
                            <li>Symfony</li>
                            <li>PHP</li>
                            <li>Programmation Orienté Objet</li>
                        </ul>
                    </div>

                </div>
        
        </>
    )
}