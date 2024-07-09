import Nav from "./Nav";


const Navbar = () => {
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 4,
            name: 'Services',
            path: '/services'
        },
        {
            id: 5,
            name: 'FAQ',
            path: '/faq'
        }
    ];

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light md:justify-center">
                <ul className="sm:block md:flex">
                    {routes.map((route) => <Nav key={route.id} route={route}></Nav>)}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;