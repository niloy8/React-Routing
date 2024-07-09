import { useState } from "react";
import Nav from "./Nav";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {

    const [open, setOpen] = useState(false);
    const routes = [
        {
            id: 1, name: 'Home', path: '/'
        },
        {
            id: 2, name: 'About', path: '/about'
        },
        {
            id: 3, name: 'Contact', path: '/contact'
        },
        {
            id: 4, name: 'Services', path: '/services'
        },
        {
            id: 5, name: 'FAQ', path: '/faq'
        }
    ];

    return (
        <div>
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {open ? <RxCross1></RxCross1> : <CiMenuFries></CiMenuFries>}
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light md:justify-center">

                <ul className={`sm:block duration-500 md:flex ${open ? 'top-24' : '-top-80'} absolute md:static`}>
                    {routes.map((route) => <Nav key={route.id} route={route}></Nav>)}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;