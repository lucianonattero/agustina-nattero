import React from 'react';
import defaultClasses from './banner.module.css';

const Banner = props => {
    const classes = defaultClasses;
    const { title } = props;
    
    return (
        <div className={classes.root}>
            <h1 className={classes.title}> {title} </h1>
        </div>
      );
    };

export default Banner;
