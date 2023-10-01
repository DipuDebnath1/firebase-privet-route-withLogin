import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { authContxt } from "../../AuthProvider/Authprovider";


const Navbar = () => {

    const {user,LogOut} = useContext(authContxt);
    

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            
            </div>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        {
            user && <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                <NavLink to={'/service'}>Service</NavLink>
            </ul>
        </div>
        }
        <div className="navbar-end">
            {
                user ? <>
                    <Link onClick={LogOut}>Sign Out</Link>
                </>:<Link to={'/login'}>SignIn</Link>
           
            }
            
        </div>
        </div>
    );
};

export default Navbar;