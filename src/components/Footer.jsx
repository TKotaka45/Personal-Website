import React from 'react'
import * as styles from './styles/footer.module.css'


function Footer() {
    return (
        <div className ={styles.container}>
            <a id={styles.contact}href='/contact'>Contact Me</a>
        </div>
    )
}

export default Footer;