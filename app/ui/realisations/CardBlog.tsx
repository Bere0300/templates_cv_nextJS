import LogoBlog from "./LogoBlog";

export default function CardBlog(){

    return (
        <>
                <h1 className="underline underline-offset-4 text-center uppercase text-xl mb-4">Mon projet Le Top Digital</h1>
                <LogoBlog/>
                <p className="text-justify m-5">
                    Mon projet Le Top Gigital était un projet de fin d&apos;année de ma licence LEA (Langues Étrangères Appliquées), ave cune option Culture digitales. Ce projet a été créé avec le CMS Wordpress.
                    Le Top Digital est un blog qui réunis des informations sur les sujets principaux du digital et les outils à connaître comme : les crypto-monnaies, les outils du web (HTML, CSS, La suite Adobe...), les réseaux sociaux et leurs utilisations ...
                </p>
                <div className="flex justify-center">
                    <a href="https://leptitopdigi.wordpress.com/" className="bg-purple-200 px-5 py-3 rounded text-black ring-4 ring-purple-400 hover:ring-offset-2"  target='_blank'>Visiter Le Top Digital</a>
                </div>
        
        </>
    )
}