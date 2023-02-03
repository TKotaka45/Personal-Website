import * as React from 'react'
import * as styles from '../styles/background.module.css'
import gatsbyBkg from '../../../static/gatsbyIcon.png'
import reactIcon from '../../../static/reactIcon.png'

function Background (){

    return(
        <div>
            <img src ={gatsbyBkg} alt='test' className={styles.img1}></img>
            <img src={reactIcon} alt='test2' className={styles.img2}></img>
        </div> 
    )

}

export default Background