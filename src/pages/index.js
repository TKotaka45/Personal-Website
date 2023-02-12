import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Backgrounds/IndexBackground'
import * as home from '../components/styles/home.module.css'


const Home = () => {
    return (
        <>
            <Header />
            <Background />
            <div className={home.information}>
                <div id={home.introduction} className={home.aboutMe}>
                    <p>
                        My name is Tyler Kotaka. I am a recent graduate from Ohio State University. I graduated in December 2022 with a Bachelor of Science in Mathematics with a theoretical specialization. I am currently seeking a junior position in web development. I am working on multiple independent web development projects using different tech stacks to expand my experience and understanding of full-stack development.
                        <br /><br />
                        The current technologies I am developing with are:
                        <br />
                        Gatsby, Node.JS, Express.JS, MongoDB
                    </p>
                </div>
                <div id={home.work} className={home.aboutMe}>
                    <p>

                        I am currently a substitute teacher and paraprofessional through the Educational Services Center of Central Ohio. I serve several school districts in the Central Ohio area including Upper Arlington, Hilliard, Bexley, Worthington, and Westerville. My primary responsibilities include covering classrooms, leading lessons for absent teachers, and serving as a paraprofessional assisting students with developmental disabilities during classroom instruction.
                        <br /><br />
                        During college, I worked as a service technician at one of the top-performing retail stores of an international bicycle company. I diagnosed and serviced customer bikes of all types, makes, and models. The service team set global company records and was the highest-performing store in service in 2021.
                        <br /><br />
                        I worked as an aquatics crew chief for the Ohio State University during the school year. The facility had two pool areas with a total of 7 pools; on shift, we were responsible for one of the pool areas, a team of guards, and a pool technician. Crew chiefs set up rotations for the guards and were the primary responders and coordinators during emergencies. In an emergency, the crew chief had to coordinate and direct the staff to alert and receive EMS, control crowds, obtain equipment to save the victim, perform CPR if necessary, and document the incident. Crew Chiefs also administered bi-weekly skills audits to the guards to keep necessary skills fresh.
                    </p>
                </div>
                <div id={home.personal} className={home.aboutMe}>
                    <p>
                        Outside of school and working, I am an avid musician. I was a member of Ohio State University's marching band (TBDBITL). I played the flugelhorn in C-Row from 2018-2022 and was a squad leader for the final year. Being a member involved trying out for a spot in a 228-member band against 350+ candidates every year, weekly music memorization tests, and 20+ hours of rehearsal and practicing every week during the fall semester.
                        <br /> <br />
                        Becoming a squad leader involved my row (section) voting on multiple people in my row to receive interviews with the directing staff for the positions. Following the interviews, the selections for the squad leaders are announced. We then had to attend leadership development sessions preceding the season to ensure success in the season in leading our rows. Before the season we attended twice-weekly summer practice to teach prospective members how to march and prepare for tryouts. For tryouts, we scored the new members and returning veterans on their marching abilities several times across the two-day process. Throughout the season we were responsible for administering the weekly music memorization tests and keeping communication open between the members of our rows and the directing staff.
                        <br /> <br />
                        The hard work was not without reward; I had the opportunity to cheer on and play for the buckeyes at every home game, some away games, two CFP semi-finals (2019 & 2022), and two Rose bowls (January 2019 & 2022). Being a member in 2018 also allowed me to march in the 2018 Macy's Thanksgiving Day Parade in New York City.
                    </p>
                </div>

                <div id={home.sport} className={home.aboutMe}>
                    <p>
                        In what time I have to spare outside marching band, school, and work, I spend training for triathlon competitions. I spend my time running local trails and riding my bikes on the roads around Central Ohio. I have found success in my races; I qualified for and competed in USA Triathlon National Championships and qualified again for 2023. I have also completed an IronMan 70.3 triathlon, the 2021 Ohio Ironman 70.3, which involved swimming over a mile in open water, riding a bike for 56 miles then running a half marathon, 13.1 miles.
                    </p>
                </div>
            </div>
            <Footer />
        </>
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
