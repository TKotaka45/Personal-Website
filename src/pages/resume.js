import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import resumeImg from '/static/resumeImg.png'
import * as resume from '../components/styles/resume.module.css'




function Resume() {
    return (
        <body>
            <Header />
            <img id={resume.image} src={resumeImg} alt="An Image of my resume, click to open PDF in new window"></img>

            <Footer />
        </body>
    )

}

export default Resume;