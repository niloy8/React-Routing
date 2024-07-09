
const Nav = ({ route }) => {
    const { path, name } = route
    return (
        <li className="mr-10 hover:text-yellow-50 sm:py-2"><a href={path}>{name}</a></li>
    );
};

export default Nav;