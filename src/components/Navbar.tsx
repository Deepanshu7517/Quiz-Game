import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
interface pageItem {
    name:string,
    path:string,
    active:boolean
}
const Navbar = () => {
    const pagesData: pageItem[] = [
        { name: 'Home', path: '/', active: true },
        { name: 'About', path: '/about', active: false },
    ]
    const [Page] = useState<pageItem[]>(pagesData);
    return (
        <header>
            <nav className="navbar md:relative left-36 h-12 content-center text-white font-poppins text-2xl max-w-[600px] m-auto">
                <ul className="flex font-medium justify-around items-center h-full">
                    {Page.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink className={({isActive}) => isActive ? 'border-b-4 border-[#D3AF84] text-[#ffdfb8] decoration-4  transition-all  ease-in-out duration-300 ' :''} to={item.path}>{item.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;