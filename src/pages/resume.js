import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import resumeImg from '/static/resumeImg.png'
import TylerKotakaResume from '../../static/resume.pdf'
import * as resume from '../components/styles/resume.module.css'




function Resume() {
    return (
        <>
            <Header />
            <div style={{width:'60rem', margin:'10rem auto 0 auto'}}>
                <img id={resume.image} src={resumeImg} alt="An Image of my resume, click to open PDF in new window"></img>
                <a href={TylerKotakaResume} download='TylerKotakaResume.pdf' style={{fontSize:'1.5rem', float:'right', color:'#cccccc', fontWeight:'200'}}>Download Resume PDF</a>
            </div>
            

            <Footer />

        </>
    )

}

export default Resume;