import React from 'react';
import { Link } from 'react-router-dom';
import defaultClasses from './navbar.module.css';

const Navbar = props => {
    const classes = defaultClasses;
    // const { name } = props

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.link}>
                    <Link to='/bio'>Bio</Link>
                </div>
                <div className={classes.link}>
                    <Link to='/works-art'>Obra</Link>
                </div>
                <div className={classes.link}>
                    <Link to='/'>Statement</Link>
                </div>
                <div className={classes.link}>
                    <Link to='/'>Contacto</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
