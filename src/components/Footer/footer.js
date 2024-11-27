import React from 'react';
import defaultClasses from './footer.module.css';

const Footer = props => {
    const classes = defaultClasses;
    const { name } = props
    const urlToCopy = 'agustinanattero@gmail.com';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(urlToCopy)
        .then(() => {
            alert("¡Enlace copiado al portapapeles!");
        })
        .catch((err) => {
          console.error("Error al copiar el enlace: ", err);
        });
    };
    return (
        <footer className={classes.root} data-cy="Footer-root">
            <div className={classes.container}>
                <div className={classes.contentTitle}>
                    <h1 className={classes.subTitle}>{name}</h1>
                    <div className={classes.divider}></div>
                </div>
                <div className={classes.socialMedia}>
                    <a className={classes.link}
                       href={urlToCopy} onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard();
                       }}>
                        <img src='/images/correo.png' alt='correo@gmail.com'/>
                    </a>
                    <a href='/#'
                       className={classes.link}
                       target='_blank'>
                        <img  src='/images/facebook.png' alt='agustinanattero'/>
                    </a>
                    <a href='https://www.instagram.com/agustinanattero?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                       className={classes.link}
                       target='_blank'>
                        <img  src='/images/instagram.png' alt='agustinanattero'/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
