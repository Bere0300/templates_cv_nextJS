'use client';
import { BriefcaseIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function Experience() {
    const [showCard1, setShowCard1] = useState(false);
    const [showCard2, setShowCard2] = useState(false);
    const [showCard3, setShowCard3] = useState(false);
    const [showCard4, setShowCard4] = useState(false);

    const toggleCard = (id: string) => {
        switch (id) {
            case 'circle1':
                setShowCard1(!showCard1);
                setShowCard2(false);
                setShowCard3(false);
                setShowCard4(false);
                break;
            case 'circle2':
                setShowCard2(!showCard2);
                setShowCard1(false);
                setShowCard3(false);
                setShowCard4(false);
                break;
            case 'circle3':
                setShowCard3(!showCard3);
                setShowCard1(false);
                setShowCard2(false);
                setShowCard4(false);
                break;
            case 'circle4':
                setShowCard4(!showCard4);
                setShowCard1(false);
                setShowCard2(false);
                setShowCard3(false);
                break;
            default:
                break;
        }
    };

    return (
        <div className="container mx-auto mt-10 text-white">
        <h2 className="text-2xl font-bold mb-14 text-center uppercase underline underline-offset-4">Mes Expériences Professionnelles</h2>
        <div className="flex items-center justify-between max-sm:flex-col">
            <div className="flex flex-1 flex-col justify-center items-center">
                <div className="h-6 w-6 bg-white rounded-full flex justify-center items-center">
                    <div className='h-5 w-5 text-violet-500'><BriefcaseIcon/></div>
                </div>
                <h3  className=' py-2 cursor-pointer hover:text-violet-500 hover:-translate-y-1 hover:scale-100' onClick={() => toggleCard('circle1')}>Quick (Burger King)</h3>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center">
                <div className="h-6 w-6 bg-white rounded-full flex justify-center items-center">
                    <div className='h-5 w-5 text-violet-500'><BriefcaseIcon/></div>
                </div>
                <h3 className='py-2 cursor-pointer hover:text-violet-500 hover:-translate-y-1 hover:scale-100' onClick={() => toggleCard('circle2')}>Crédit Agricole Brie Picardie</h3>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center">
                <div className="h-6 w-6 bg-white rounded-full flex justify-center items-center">
                    <div className='h-5 w-5 text-violet-500'><BriefcaseIcon/></div>
                </div>
                <h3 className=' py-2 cursor-pointer hover:text-violet-500 hover:-translate-y-1 hover:scale-100' onClick={() => toggleCard('circle3')}>Stage la Boîte en Fer</h3>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center">
                <div className="h-6 w-6 bg-white rounded-full flex justify-center items-center">
                    <div className='h-5 w-5 text-violet-500'><BriefcaseIcon/></div>
                </div>
                <h3 className=' py-2 cursor-pointer hover:text-violet-500 hover:-translate-y-1 hover:scale-100' onClick={() => toggleCard('circle4')}>Stage EpastelSoft</h3>
            </div>
        </div>
        <div className='flex justify-center'>
        {showCard1 && (
            <div className='bg-white rounded text-black w-2/4 p-4 mt-10 max-sm:w-full'>
                <h2 className='text-center text-2xl uppercase'>Employée polyvalente</h2>
                <div className='flex justify-between mt-4'>
                    <p className=' text-sm text-gray-400 italic text-center'>Aout 2019 - Juil. 2020</p>
                    <p className=' text-sm text-gray-400 italic text-center'>Bordeaux - 33</p>
                </div>
                <div className='text-black text-justify mt-4'>
                    <h4>Compétences : </h4>
                    <ul className='list-disc pl-6'>
                        <li>Organisation</li>
                        <li>Procédures d&apos;encaissement</li>
                        <li>Relation client</li>
                        <li>Règles d&apos;hygiène et de sécurité alimentaire</li>
                    </ul>
                </div>
            </div>
        )}
        {showCard2 && (
            <div className='bg-white rounded text-black w-2/4 p-4 mt-10 max-sm:w-full'>
                <h2 className='text-center text-2xl uppercase'>Assitante commerciale</h2>
                <div className='flex justify-between mt-4'>
                    <p className=' text-sm text-gray-400 italic text-center'> Sept. 2021 - Juin 2022</p>
                    <p className=' text-sm text-gray-400 italic text-center'>Bray sur Seine - 77</p>
                </div>
                <div className='text-black text-justify mt-4'>
                    <h4>Compétences : </h4>
                    <ul className='list-disc pl-6'>
                        <li>Relation client</li>
                        <li>Connaissances bancaires</li>
                        <li>Fiduciaire</li>
                    </ul>
                </div>
            </div>
        )}
        {showCard3 && (
            <div className='bg-white rounded text-black w-2/4 p-4 mt-10 max-sm:w-full'>
                <h2 className='text-center text-2xl uppercase'>Développeuse web et web mobile</h2>
                <div className='flex justify-between mt-4'>
                    <p className=' text-sm text-gray-400 italic text-center'>Août 2023 - Sept 2023</p>
                    <p className=' text-sm text-gray-400 italic text-center'>Misy sur Seine - 77 </p>
                </div>
                <div className='text-black text-justify mt-4'>
                    <h4>Compétences :</h4>
                    <ul className='list-disc pl-6'>
                        <li>Création de site internet</li>
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>Bootstrap</li>
                        <li>Intégration d&apos;un backOffice complet</li>
                    </ul>
               </div>
            </div>
        )}
        {showCard4 && (
            <div className='bg-white rounded text-black w-2/4 p-4 mt-10 max-sm:w-full'>
                <h2 className='text-center text-2xl uppercase'>Développeuse Web et Web mobile</h2>
                <div className='flex justify-between mt-4'>
                    <p className=' text-sm text-gray-400 italic text-center'>Janv. 2024 - Mars 2024</p>
                    <p className=' text-sm text-gray-400 italic text-center'>Champs sur Marne - 77</p>
                </div>
                <div className='text-black text-justify mt-4'>
                    <h4>Compétences : </h4>
                    <ul className='list-disc pl-6'>
                        <li>Création de site ecommerce</li>
                        <li>Symfony</li>
                        <li>HTML/CSS</li>
                        <li>Javascript</li>
                        <li>Bootstrap</li>
                        <li>BackOffice complet</li>
                    </ul>
                </div>
            </div>
        )}
        </div>
    </div>
    );
}
