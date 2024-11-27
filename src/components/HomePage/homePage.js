import React from 'react';
import defaultClasses from './homePage.module.css';
import Banner from '../Banner';

const HomePage = props => {
    const classes = defaultClasses;

    return (
        <main>
            <div className={classes.home}>
                <Banner title="Agustina Nattero"/>
                {/* <Topics /> */}
                {/* <Description />
                <FrameWork />
                <Experience />
                <Hobbie />
                <Footer /> */}
            </div>
        </main>
    );
}

export default HomePage;
