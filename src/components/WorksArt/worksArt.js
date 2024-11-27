import React from 'react';
// import Button from '../Button';
import defaultClasses from './worksArt.module.css';
import { Link } from 'react-router-dom';

const WorksArt = props => {
    const classes = defaultClasses;
    const works = [
        {
            image: "images/banner-1.jpeg",
            title: "Lorem Ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: "lorem-1"
        },
        {
            image: "/images/banner-2.jpg",
            title: "Lorem Ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: "lorem-2"
        },
        {
            image: "/images/banner-3.jpg",
            title: "Lorem Ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: "lorem-3"
        },
        {
            image: "/images/banner-4.jpg",
            title: "Lorem Ipsum",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            url: "lorem-4"
        }
    ];
    
    const listWorks = Array.from(works, (topic, index) => {

        if (topic == null) {
            return;
        }

        var path = '';
        
        if (topic.url !== null) {
            path = '/works-art/' + topic.url;
        }
        let dataState = {name: 'joel sesa'}
        console.log(topic);
        return (
            <div key={index} className={classes.topic}>
                <img className={classes.image}
                    src={topic.image}
                    alt={`Imagen ${index + 1}`} />
                <div className={classes.content}>
                    <h2 className={classes.title}>
                        {topic.title}
                    </h2>
                    <span>{topic.content}</span>
                    <Link to={{ pathname: path, state: dataState }}
                          className={classes.btnCommercial}
                          data-cy="WorksArt-actionCommercial" >
                            Ver Mas
                    </Link>
                </div>
            </div>
        )
    });

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                {listWorks}
            </div>
        </div>
      );
    };

export default WorksArt;
