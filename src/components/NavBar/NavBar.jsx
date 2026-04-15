import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    
    return (
        <div className='bg-white shadow-sm '>
            <div className="navbar  mx-auto w-11/12 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow space-y-3">
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'font-semibold text-white bg-[#244D3F] rounded-sm' : 'font-medium text-[#64748B]'} to={'/'}>  Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'font-semibold text-white bg-[#244D3F] rounded-sm' : 'font-medium text-[#64748B]'} to={'/Timeline'}> Timeline
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'font-semibold text-white bg-[#244D3F] rounded-sm' : 'font-medium text-[#64748B]'} to={'Stats'}> Stats
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <NavLink to={'/'} className="ml-3 cursor-pointer text-2xl font-extrabold text-[#1F2937] ">Keen<span className='font-semibold text-[#244D3F]'>Keeper</span></NavLink>

                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-10">
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'font-semibold text-white bg-[#244D3F] rounded-sm' : 'font-medium text-[#64748B]'} to={'/'}> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'font-semibold text-white bg-[#244D3F] rounded-sm' : 'font-medium text-[#64748B]'} to={'/Timeline'}> Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'font-semibold text-white bg-[#244D3F] rounded-sm' : 'font-medium text-[#64748B]'} to={'Stats'}> Stats
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default NavBar;