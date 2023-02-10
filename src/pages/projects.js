import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import Background from '../components/Backgrounds/ProjectBackground.jsx'
import * as projects from '../components/styles/projects.module.css'
import jsIcon from '../../static/jsIcon.png'
import nodeIcon from '../../static/nodeIcon.png'
import mongoIcon from '../../static/mongoIcon.png'
import gatsbyIcon from '../../static/gatsbyIcon.png'
import awsIcon from '../../static/awsIcon.png'

const projectsPage = () => {
    return (
        <div>
            <div id={projects.holder}>
                <Header />
                <div className={projects.information}>

                    {/* Contact Project */}
                    <div className={projects.project}>
                        <a id={projects.title} href='https://github.com/TKotaka45/Contact_website' target="_blank" rel="noreferrer">
                            Contact Website
                        </a>
                        <div id={projects.info}>
                            <p>
                                The Contact storage website is my first full stack project built on the Node.JS JavaScript runtime. The project utilizes Express.JS for routing, a Mongo Database for storage of user information. The website prompts users to log in using credentials and then are met with a page displaying all of their contacts.
                            </p>
                            <p>
                                This project has not been deployed yet.
                                <br></br>
                                The source code can be found on my GitHub <a href='https://github.com/TKotaka45/Contact_website' target="_blank" color="#cccccc" rel="noreferrer">here</a>
                            </p>
                        </div>
                        <div id={projects.projectImg}>

                        </div>
                        <div id={projects.stack}>
                            <img src={jsIcon} alt='JavaScript Logo' ></img>
                            <img src={nodeIcon} alt='Node.Js Logo' ></img>
                            <img src={mongoIcon} alt="MongoDB Logo" style={{ borderRadius: '50%' }}></img>
                        </div>
                    </div>

                    {/*Personal Website */}
                    <div className={projects.project}>
                        <a id={projects.title} href='https://github.com/TKotaka45/Personal-Website' target="_blank" rel="noreferrer">
                            Personal Website
                        </a>
                        <div id={projects.info}>
                            <p>
                                This website is in ongoing development to further explore the possibilities of Gatsby. The site will reflect current interests and what I am currently exploring in the space of web development. It is currently deployed on AWS Amplify.
                            </p>
                            <p>
                                The source code can be found on my GitHub <a href='https://github.com/TKotaka45/Personal-Website' target="_blank" color="inherit" rel="noreferrer">here</a>
                            </p>
                        </div>
                        <div id={projects.projectImg}>

                        </div>
                        <div id={projects.stack}>
                            <img src={jsIcon} alt='JavaScript Logo' ></img>
                            <img src={awsIcon} alt='AWS Logo'></img>
                            <img src={gatsbyIcon} alt="Gatsby Logo"></img>
                            <img src={nodeIcon} alt='Node.Js Logo' ></img>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default projectsPage;