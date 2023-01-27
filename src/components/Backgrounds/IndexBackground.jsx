import * as React from 'react'
import * as styles from '../styles/background.module.css'
import gatsbyIcon from '../../images/GatsbyIcon.png'
import reactIcon from '../../images/reactIcon.png'

function Background (){

    return(
        <div>
            <img src ={gatsbyIcon} alt='test' className={styles.img1}></img>
            <img src={reactIcon} alt='test2' className={styles.img2}></img>
        </div> 
    )

}

export default Background