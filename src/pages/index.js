import * as React from 'react'
import Header from '../components/Header'
import * as home from '../components/styles/home.module.css'


const Home = () => {
    return (
        <div>
            <Header/>
            <div className={home.information}>
                <div id={home.introduction} className={home.aboutMe}>
                    <p>
                         My name is Tyler Kotaka, I am a recent gratuate from Ohio State University. I graduated December 2022 with a Bachelor of Science in Mathematics with a theoretical specialization. I am currently seeking a junior position in web development. I am currently working on multiple independent web development projects using different tech stacks to expand my experience and understanding of full stack development.
                         <br></br> <br></br>
                        The current technologies I am developing with are: 
                        <br></br>
                        Gatsby, Node.JS, Express.JS, MongoDB
                    </p>
                </div>
                <div id={home.work} className={home.aboutMe}>
                    <p>
                        I am currently employed with at one ot the top performing retail stores of an international bicycle company as a service technician. In 2021 my team was the highest performing store of over 1,700 in the world in service dollars.
                        <br></br><br></br>
                        During the school year I was a Crew Chief for Aquatics at the Ohio State University. As a Crew Chief I was responsible for ensuring all lifeguards on duty were maintianing an active watch on the patrons of the pool as well as a pool technician to ensure the deck was clean and the chemicals in the pool were within safe limits for public use. The team was responsible for guarding and maintaining 7 pools within the facility for use of varsity swimming, diving and synchronized swimming aswell as public use.
                    </p>
                </div>
                <div id={home.personal} className={home.aboutMe}>
                    <p>
                        This is some personal stuff
                    </p>
                </div>
            </div>
        </div>
    )
}

export const Head = () =>
    <>
        <title>Tyler Kotaka</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" rel="stylesheet" />
    </>

export default Home
