import React from 'react';
import defaultClasses from './header.module.css';
import Navbar from '../Navbar';

const Header = props => {
    const classes = defaultClasses;
    const { name } = props

    return (
        <header className={classes.root} data-cy="Header-root">
            <div className={classes.toolbar}>
                <h1>{ name }</h1>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;
