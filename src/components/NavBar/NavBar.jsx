import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li><a>Link 2</a></li>
                    <li><a>Link 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;