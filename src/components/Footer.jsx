import React from 'react'
import * as styles from './styles/footer.module.css'
import gatsImg from '../../static/gatsbyIcon.png'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <a href='/' style={{gridArea:'3/2/4/3'}}>Home</a>
                <a href='/projects' style={{gridArea:'5/2/6/3'}}>Projects</a>
                <a href='/resume' style={{gridArea:'7/2/8/3'}}>Resume</a>

                <a href='/contact' style={{gridArea:'3/4/4/5'}}>Contact Me</a>
                <a href='https://www.linkedin.com/in/tyler-kotaka' style={{gridArea:'5/4/6/5'}} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href='https://github.com/TKotaka45' style={{gridArea:'7/4/8/5'}} target="_blank" rel="noreferrer">GitHub</a>



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