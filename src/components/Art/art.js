import React from 'react';
// import Button from '../Button';
import { useLocation } from 'react-router-dom';
import defaultClasses from './art.module.css';

const Art = props => {
    const classes = defaultClasses;
    let location = useLocation();
    // const { state } = props.location;
console.log(location.state);
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <img className={classes.image}
                    src='/images/placeholder-600-300.png'
                    alt='lorem ipsum'
                    width={600} />
                <div className={classes.description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nam ligula, habitant laoreet leo faucibus fames turpis nibh senectus metus, netus hac montes vulputate ullamcorper dui odio primis. Mus venenatis facilisis vulputate nisi aliquet vestibulum, lacus metus malesuada arcu duis, egestas penatibus cras ultricies rhoncus. Nostra luctus sociosqu iaculis mollis parturient elementum sed porta semper dis, nec suspendisse feugiat habitasse curabitur dignissim class hac tempor, tellus habitant ridiculus cum sem nascetur nullam nibh dictumst. Euismod torquent ac viverra aenean etiam nisi ullamcorper himenaeos, molestie pretium ultricies laoreet luctus curae habitasse penatibus mus, platea inceptos auctor facilisis rutrum congue hac. Sed in suspendisse consequat platea eros conubia semper, ac augue porta ullamcorper erat nascetur bibendum, dui vivamus dignissim elementum fermentum aptent. Cubilia egestas eros etiam neque pretium fermentum ligula, felis habitant enim cras orci tortor velit, ullamcorper integer consequat dictumst nunc tristique. Habitasse nec magna et cum lectus proin mus urna, accumsan purus torquent augue sollicitudin nam mauris, magnis sed nostra tristique mollis aliquam tortor. Primis laoreet eleifend tortor tempor feugiat ultricies eros scelerisque, sociis ultrices at id sociosqu ac condimentum vivamus, aliquet nostra vulputate vestibulum fermentum massa nulla. Consequat sed in ac eget vitae litora mus viverra curae volutpat montes quam, tincidunt class vel etiam suspendisse laoreet tortor fusce scelerisque dui senectus augue, quisque phasellus nunc aptent feugiat habitasse sociosqu nam molestie enim nibh. Vehicula est mus ante dictum morbi quam ad vel, tellus pharetra per proin luctus fusce ligula curabitur, ullamcorper mauris mi nibh dignissim suscipit venenatis. Eleifend ornare nisl dui nascetur purus penatibus, litora enim tincidunt non porttitor nibh dictumst, nam fusce libero commodo gravida. Aenean tincidunt dis mauris etiam sodales mattis odio netus elementum, nec vehicula condimentum velit parturient fames mollis congue dignissim, conubia bibendum curae ultrices enim magnis sapien nullam. Feugiat nisl auctor conubia mauris aliquam urna fermentum quisque, nec pretium suscipit inceptos ligula interdum quam rhoncus in, vehicula purus varius ultricies dis netus tellus. Id lobortis pellentesque lacinia litora convallis fringilla ultricies, lacus quisque nunc viverra proin faucibus luctus, augue aptent nibh taciti nulla posuere. Malesuada tortor feugiat vulputate augue nam, curae congue ultricies sapien nibh sociosqu, penatibus purus egestas vivamus. Dis tempus curae orci sem justo placerat feugiat eget, duis sociosqu platea convallis tellus aliquam himenaeos at nullam, malesuada fermentum facilisis neque interdum vestibulum nisi.</p>
                </div>
            </div>
        </div>
    )
}

export default Art;