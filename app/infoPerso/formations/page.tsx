'use client';
import { AcademicCapIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function Formation() {
    const [showCard1, setShowCard1] = useState(false);
    const [showCard2, setShowCard2] = useState(false);
    const [showCard3, setShowCard3] = useState(false);

    const toggleCard = (id: string) => {
        switch (id) {
            case 'circle1':
                setShowCard1(!showCard1);
                setShowCard2(false);
                setShowCard3(false);
                break;
            case 'circle2':
                setShowCard2(!showCard2);
                setShowCard1(false);
                setShowCard3(false);
                break;
            case 'circle3':
                setShowCard3(!showCard3);
                setShowCard1(false);
                setShowCard2(false);
                break;
            default:
                break;
        }
    };

    return (
        <div className="container mx-auto mt-10 text-white">
        <h2 className="text-2xl font-bold mb-14 text-center uppercase underline underline-offset-4">Mes Formations</h2>
        <div className="flex items-center justify-between max-sm:flex-col">
            <div className="flex flex-1 flex-col justify-center items-center">
                <div className="h-6 w-6 bg-white rounded-full flex justify-center items-center">
                    <div className='h-5 w-5 text-violet-500'><AcademicCapIcon/></div>
                </div>
                <h3  className=' py-2 cursor-pointer hover:text-violet-500 hover:-translate-y-1 hover:scale-100' onClick={() => toggleCard('circle1')}>Obtention Bac Es</h3>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center">
                <div className="h-6 w-6 bg-white rounded-full flex justify-center items-center">
                    <div className='h-5 w-5 text-violet-500'><AcademicCapIcon/></div>
                </div>
                <h3 className='py-2 cursor-pointer hover:text-violet-500 hover:-translate-y-1 hover:scale-100' onClick={() => toggleCard('circle2')}>Licence LEA (Langues Étrangères Appliquées)</h3>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center">
                <div className="h-6 w-6 bg-white rounded-full flex justify-center items-center">
                    <div className='h-5 w-5 text-violet-500'><AcademicCapIcon/></div>
                </div>
                <h3 className=' py-2 cursor-pointer hover:text-violet-500 hover:-translate-y-1 hover:scale-100' onClick={() => toggleCard('circle3')}>Formation Développeur web et web mobile</h3>
            </div>
        </div>
        <div className='flex justify-center'>
        {showCard1 && (
            <div className='bg-white rounded text-black w-2/4 p-4 mt-10 max-sm:w-full'>
                <h2 className='text-center text-2xl uppercase'>Baccalauréat Économique et social</h2>
                <div className='flex justify-between mt-4'>
                    <p className=' text-sm text-gray-400 italic text-center'>Juin 2018</p>
                    <p className=' text-sm text-gray-400 italic text-center'>Lycée Thibaut de Champagne - 77</p>
                </div>
                <p className='text-black text-justify mt-4'>
                    Bac ES avec option Section Européenne SVT-Anglais
                </p>
            </div>
        )}
        {showCard2 && (
            <div className='bg-white rounded text-black w-2/4 p-4 mt-10 max-sm:w-full'>
                <h2 className='text-center text-2xl uppercase'>Validation Licence LEA (Langues Étrangères Appliquées) Anglais-Espagnol</h2>
                <div className='flex justify-between mt-4'>
                    <p className=' text-sm text-gray-400 italic text-center'> Sept. 2018 - Mai 2021</p>
                    <p className=' text-sm text-gray-400 italic text-center'>Université Bordeaux Montaigne - 33</p>
                </div>
                <p className='text-black text-justify mt-4'>
                    Licence LEA avec une option Cultures digitales et nouveaux médias. Apprentissage du monde du développement web : HTML/CSS,
                    création de blog et site. Gestion des réseaux sociaux pour nos sites internets et apprentissage des chartes graphiques.
                </p>
            </div>
        )}
        {showCard3 && (
            <div className='bg-white rounded text-black w-2/4 p-4 mt-10 max-sm:w-full'>
                <h2 className='text-center text-2xl uppercase'>Validation Formation Développeur Web et Web mobile</h2>
                <div className='flex justify-between mt-4'>
                    <p className=' text-sm text-gray-400 italic text-center'>Mars 2023 - Oct. 2023</p>
                    <p className=' text-sm text-gray-400 italic text-center'>Philiance Formation - 91</p>
                </div>
                <p className='text-black text-justify mt-4'>
                Diplôme équivalent à un Bac+2 <br />
                Développement de site web, apprentissage de différents languages web (HTML/CSS, PHP, Symfony, JavaScript, ReactJs, Bootstrap), apprentissage de nouveaux outils (Adobe XD, VS Code, PhotoShop)
                </p>
            </div>
        )}
        </div>
    </div>
    );
}
