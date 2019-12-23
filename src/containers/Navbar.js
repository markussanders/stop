import React from 'react';

const Navbar = props => {
    
    return (
        <div className="hero-head">
        <header className="navbar">
        <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">
            <div className="navbar-item">
                <span className="icon" onClick={() => props.toggleAbout()}>
                <i class="fas fa-info-circle"></i>
                </span>
            </div>
            </div>
        </div>
        </header>
    </div>
    );
}

export default Navbar;
