import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const About = () => {
    const form = useRef();
    const showContact = () => {
        const contactForm = document.getElementById('contact_form')
        contactForm.style.display = "block"
    }
    const hideContact = () => {
        const contactForm = document.getElementById('contact_form')
        contactForm.style.display = "none"
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_td1297m', 'template_tbxhe2n', form.current, 'user_oTr4IICx6XaPXfQ9doAgh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };
    return (
        <div>
            <section className="bg-secondary about-section">
            <div className="container">
                <div className="d-flex justify-between align-center">
                    <div className="w-40"><img className="img-fluid" src="images/Ahsan.png" alt=""/></div>
                    <header className="w-40">
                        <h3 className="text-white">About Me</h3>
                        <p className="text-default">In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                        <div className="mt-20"><button onClick={showContact} className="btn">CONTACT US</button></div>
                    </header>
                </div>
                <div className="contact-form" id="contact_form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="text-right hide-contact">
                            <i onClick={hideContact} id="close_contact" className="fas fa-times"></i>
                        </div>
                        <label for="lname">Last Name</label>
                        <input required type="text" id="name" name="user_name" placeholder="Your name.."/>

                        <label for="email">Email</label>
                        <input required type="email" id="email" name="user_email" placeholder="Your name.."/>
                    
                        <label for="message">Your Message</label>
                        <textarea required id="message" name="message" placeholder="Write something.." style={{height:"200px"}}></textarea>
                    
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </section>
        </div>
    )
}

export default About
