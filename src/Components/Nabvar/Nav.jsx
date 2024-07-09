
const Nav = ({ route }) => {
    const { path, name } = route
    return (
        <li className="mr-10 hover:text-yellow-50"><a href={path}>{name}</a></li>
    );
};

export default Nav;