import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as styles from '../components/styles/contact.module.css'

const axios = require('axios').default;
const link = 'https://script.google.com/macros/s/AKfycbxFsf4uBe40yrUtmjEcjVrRYU5oC-q9rI3kEQaHS-Pa9hfOezdLgSXW_-TtYz2zAW7G/exec'

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email:'',
            Message:'',
            Location:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onLocationChange = this.onLocationChange.bind(this);
    }

    onNameChange(event) {
        this.setState({Name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({Email: event.target.value})
    }
    onMessageChange(event) {
        this.setState({Message: event.target.value})
    }
    onLocationChange(event) {
        this.setState({Location: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        document.getElementById('serverResponse').innerHTML = "Submitting..."

        var contactData = new FormData();
        for (var key in this.state) {
            contactData.append(key, this.state[key])
        }

        axios.post(link, contactData)
        .then(function (response){
            if (response.data.result === "success"){
                document.getElementById('serverResponse').innerHTML = "Thank you for contacting me"
            }
            else {
                document.getElementById('serverResponse').innerHTML = "There was an error submitting your information"
            }
        })
        .catch(function(error){
            document.getElementById('serverResponse').innerHTML = "There was an error on the backend saving your information"
            console.log(error)
        })
    }

    render() {
        return (
            <>
                <Header />
                <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                    <main id={styles.contactForm}>
                        Contact Me:
                        <form className={styles.uInput} id='contactForm' onSubmit={this.handleSubmit.bind(this)} method='POST' >
                            <div style={{ gridArea: 'n' }}>
                                <div>   
                                    <label for='Name'>
                                        Name:
                                        <input type='text' name='Name' id='Name' placeholder='Name' onChange={this.onNameChange} required />
                                    </label>
                                </div>
                            </div>

                            <div style={{ gridArea: 'e' }}>
                                <div>
                                    <label for='Email'>
                                        Email:
                                        <input type='email' name='Email' id='email' placeholder='Email Address' onChange={this.onEmailChange} required />
                                    </label>
                                </div>
                            </div>

                            <div style={{ gridArea: 'm' }}>
                                <div>
                                    <label for='Message'>
                                        Message:
                                        <textarea name='Message' id='Message' placeholder='Message' onChange={this.onMessageChange} required />
                                    </label>
                                </div>
                            </div>

                            <div style={{ gridArea: 'l' }}>
                                <div>
                                    <label for='Location'>
                                        Where are you from?
                                        <input type='text' name='Location' id='Location' placeholder='City, State' onChange={this.onLocationChange} />
                                    </label>
                                </div>
                            </div>

                            <div style={{ gridArea: 's', postition: 'relative' }}>
                                <input type='submit' id='submitBtn' value='Submit'></input>
                            </div>
                        </form>
                        <div id='serverResponse' style={{float:'right', fontSize:'1.5rem'}}> </div>
                    </main>
                    <Footer />
                </div>
            </>
        );
    }
}
export default ContactForm

if (typeof document !== "undefined") {
    const txtarea = document.getElementsByTagName("textarea");
    for (let i = 0; i < txtarea.length; i++) {
        txtarea[i].setAttribute("style", "height:" + (txtarea[i].scrollHeight) + "px;overflow-y:hidden;");
        txtarea[i].addEventListener("input", OnInput, false);
    }
}

function OnInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
}