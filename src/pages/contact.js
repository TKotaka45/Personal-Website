import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as styles from '../components/styles/contact.module.css'


function Contact() {
    return (
        <div style={{minHeight:'100vh', display:'flex',  flexDirection:'column', overflow:'hidden'}}>

            <Header />

            <main id={styles.contactForm}>
                Contact Me:
                <div id={styles.uInput}>
                    <div style={{ gridArea: 'n'}}>
                        <div>
                            <label for='name'>Name: </label>
                            <input type='text' name='name' id='name' placeholder='Name' />
                        </div>

                    </div>

                    <div style={{ gridArea: 'e'}}>
                        <div>
                            <label for='email'>Email: </label>
                            <input type='text' name='email' id='email' placeholder='Email Address'></input>
                        </div>

                    </div>

                    <div style={{ gridArea: 'm'}}>
                        <div>
                            <label for='message'>Message: </label>
                            <textarea name='message' id='message' placeholder='Message'></textarea>
                        </div>

                    </div>

                    <div style={{ gridArea: 'l'}}>
                        <div>
                            <label for='location'> Where are you from? </label>
                            <input type='text' id='location' placeholder='City, State'></input>
                        </div>

                    </div>

                    <div style={{ gridArea: 's', postition:'relative'}}>
                        <input type='submit' value='Submit'></input>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Contact

const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
    tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
}