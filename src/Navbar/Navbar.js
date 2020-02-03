import React from 'react';

const navbar = () => {
    return <div>
         <nav>
            <div className="nav-wrapper">
            <a href="/react" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            </div>
        </nav>
    </div>    
};

export default navbar;
