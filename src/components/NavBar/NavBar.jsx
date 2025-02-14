import { NavLink } from "react-router";

const NavBar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="listed-books">Listed Books</NavLink></li>
        <li><NavLink to="">Pages To Read</NavLink></li>
    </>

    return (
        <div className="navbar my-12">
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
                <div className="hidden md:flex md:gap-2">
                    <a className="btn font-bold text-white bg-green-600">Sign In</a>
                    <a className="btn font-bold text-white bg-blue-400">Sign Up</a>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 md:hidden">User</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Sign Up</a></li>
                        <li><a>Sign In</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;