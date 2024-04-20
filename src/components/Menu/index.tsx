
import React, { useState, useEffect } from 'react';
import styles from './menu.module.css';
import { List, X } from "@phosphor-icons/react";

export default function Menu() {
    const [showMenu, setShowMenu] = useState(true);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [smallMenu, setSmallMenu] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const menuItems: Array<{ text: string, link: string }> = [
        {
            text: 'Services',
            link: ''
        },
        {
            text: 'Work',
            link: ''
        },
        {
            text: 'About',
            link: ''
        },
        {
            text: 'Blog',
            link: ''
        },
        {
            text: 'Contact',
            link: ''
        },
    ]

    const controlNavbar = () => {
        if (
            window.scrollY > (showMobileMenu ? 96 : 160) &&
            window.scrollY > lastScrollY
        ) {
            setShowMenu(false);
            setShowMobileMenu(false);
        } else {
            setSmallMenu(window.scrollY > (showMobileMenu ? 96 : 160))
            setShowMenu(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <nav className={[
            styles.navBar,
            smallMenu ? styles.whiteBackground : '',
            showMenu ? styles.active : styles.hidden].join(' ')
        }>
            <img
                src="images/logo.png"
                alt="Digital Spaniel Logo"
                className={styles.logo}
            />
            <div className={styles.linkSection}>
                {menuItems.map(item => 
                    <a href={item.link} className={[styles.menuItem, smallMenu ? styles.primaryColor : ''].join(' ')}>{item.text}</a>
                )}
            </div>
            <div className={styles.mobileMenu}>
                <div className={styles.flexCentered} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? (
                        <X className={styles.burgerMenuIcon}/>
                    ) : (
                        <List className={styles.burgerMenuIcon}/>
                    )}
                </div>
            </div>
            <div className={[styles.mobileLinkSection, showMobileMenu ? styles.activeMobile : styles.hiddenMobile].join(' ')}>
                {menuItems.map(item =>
                    <a href={item.link} className={styles.menuItem}>{item.text}</a>
                )}
            </div>
        </nav>
    );
}