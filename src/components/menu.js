import React from 'react';
import { Link } from 'gatsby';

const Menu = () => (
    <div>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/teaching">Teaching</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </div>
)

export default Menu;