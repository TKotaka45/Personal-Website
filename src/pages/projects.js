import * as React from 'react'
import Header from '../components/Header'
import Background from '../components/Backgrounds/ProjectBackground.jsx'
import * as projects from '../components/styles/projects.module.css'
import jsIcon from '../images/jsIcon.png'
import nodeIcon from '../images/nodeIcon.png'
import mongoIcon from '../images/mongoIcon.png'
import gatsbyIcon from '../images/gatsbyIcon.png'

const projectsPage = () => {
    return (
        <div>
            <Header />
            <div className={projects.information}>

                {/* Contact Project */}
                <div className={projects.project}>
                    <a id={projects.title} href = 'https://github.com/TKotaka45/Contact_website' target ="_blank">
                        Contact Website
                    </a>
                    <div id={projects.info}>
                        <p>
                            The Contact storage website is my first full stack project built on the Node.JS JavaScript runtime. The project utilizes Express.JS for routing, a Mongo Database for storage of user information. The website prompts users to log in using credentials and then are met with a page displaying all of their contacts. 
                        </p>
                        <p>
                            The project has not been deployed yet. 
                            <br></br>
                            The source code can be found on my GitHub <a href='https://github.com/TKotaka45/Contact_website' target ="_blank" color ="#cccccc">here</a>
                        </p>
                    </div>
                    <div id={projects.projectImg}>
                        
                    </div>
                    <div id={projects.stack}>
                        <img src={jsIcon} alt='JavaScript Logo' ></img>
                        <img src={nodeIcon} alt='Node.Js Logo' ></img>
                        <img src={mongoIcon} alt="MongoDB Logo" style={{borderRadius:'50%'}}></img>
                    </div>
                </div>

                {/*Personal Website */}
                <div className={projects.project}>
                <a id={projects.title} href = 'https://github.com/TKotaka45/Personal-Website' target ="_blank">
                        Personal Website
                    </a>
                    <div id={projects.info}>
                        <p>
                            This website is in ongoing development to more further explore the possibilities of Gatsby. The site will reflect current interests and what I am currently exploring in the space of web development.
                        </p>
                        <p>
                            The source code can be found on my GitHub <a href='https://github.com/TKotaka45/Personal-Website' target ="_blank" color ="inherit">here</a>
                        </p>
                    </div>
                    <div id={projects.projectImg}>
                        
                    </div>
                    <div id={projects.stack}>
                        <img src={jsIcon} alt='JavaScript Logo' ></img>
                        <img src={gatsbyIcon} alt="Gatsby Logo"></img>
                        <img src={nodeIcon} alt='Node.Js Logo' ></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default projectsPage;