import React, { useEffect, useState } from 'react'
import * as styles from './styles/header.module.css'
import {navigate} from "gatsby"


function Header() {
    const scrollDirection = useScrollDirection();

    

    return (
        <div className={scrollDirection === "down" ? styles.containerUp : styles.container}>
            <div className={styles.title}>Tyler Kotaka</div>
            <button className={styles.btn} onClick={()=> navigate("/")} role="link" >About Me</button>
            <button className={styles.btn} onClick={()=> navigate("/projects")}>Projects</button>
            <button className={styles.btn}>Resume</button>
            <button className={styles.btn}>Contact Me</button>
        </div>
    )
}
export default Header


function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        var lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollDist = window.pageYOffset;
            const direction = scrollDist > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollDist - lastScrollY > 10 || scrollDist - lastScrollY < -10)) { 
                setScrollDirection(direction);
            } 
            lastScrollY = scrollDist > 0 ? scrollDist : 0;
        };
        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        }
    }, [scrollDirection]);

    return (scrollDirection);
}