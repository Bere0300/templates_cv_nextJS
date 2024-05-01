
'use client'

import DropdownPerso from "./DropdownPerso";
import DropdownRealisation from "./DropdownRealisation"
import DropdownLanguage from "./DropDownLanguage";
import SocialMedia from './SocialMedia';
import Logo from './Logo';


export default function NavBar(){
    return (
    <div className="flex h-14 items-center justify-between bg-purple-500 p-4 md:h-20">
        <Logo/>
        <div className='flex '>
                <DropdownPerso/>
                <DropdownLanguage/>
                <DropdownRealisation/>
        </div>
        <div> 
            <SocialMedia/>
        </div>
    </div>
)
}
