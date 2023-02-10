import React from 'react'
import * as styles from './styles/footer.module.css'
import gatsImg from '../../static/gatsbyIcon.png'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <a id={styles.contact} href='/contact'>Contact Me</a>

                <div id={styles.nameSake}>
                    {' '}
                    Tyler Kotaka {(new Date().getFullYear())}
                    {' '}
                    <img className={styles.icons} src={gatsImg}></img>
                </div>
                <div id={styles.deploy}>
                    Deployed on AWS Amplify
                </div>
            </div>
        </div>
    )
}

export default Footer;