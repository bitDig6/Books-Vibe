
const NavBar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>Listed Books</a></li>
        <li><a>Pages To Read</a></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl text-gray-500">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-2xl">Books Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl text-gray-500">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <a className="btn font-bold text-white bg-green-600">Sign In</a>               
                <a className="btn font-bold text-white bg-blue-400">Sign Up</a>               
            </div>
        </div>
    );
};

export default NavBar;