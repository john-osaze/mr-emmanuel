import Hero from "../components/Hero";
import HeroImageContact from "../assets/images/hero-image-contact.png";
import AboutImg from "../assets/images/about-pic.png";
import { BsLinkedin, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
    let extraInfo = <span dangerouslySetInnerHTML={{ __html: "I am ready to help you with any UI design &<br>research challenge you might have" }} />
    return (
        <div>
            <Hero image={HeroImageContact} textInfo="Let's get in touch" extraInfo={extraInfo} />

            <section className="profile container">
                <div className="title">
                    <p>- Profile - </p>
                </div>
                <div className="profile__inner">
                    <div className="profile__info">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Magnam explicabo voluptatum sed dignissimos sequi esse commodi,
                            praesentium nihil minima est. Dolorum similique nihil quam quos! Explicabo
                            exercitationem iure laboriosam distinctio.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Magnam explicabo voluptatum sed dignissimos sequi esse commodi,
                            praesentium nihil minima est. Dolorum similique nihil quam quos! Explicabo
                            exercitationem iure laboriosam distinctio.
                        </p>
                    </div>

                    <div className="profile__pic">
                        <img src={AboutImg} alt="Profile Pic" />
                    </div>
                </div>
                <br />
                <div className="">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam explicabo voluptatum sed dignissimos sequi esse commodi,
                        praesentium nihil minima est. Dolorum similique nihil quam quos! Explicabo
                        exercitationem iure laboriosam distinctio.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam rerum vitae ullam delectus doloribus illum. Similique placeat quasi ratione quis pariatur provident illo? Ut pariatur dolorem minus quos eveniet.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam explicabo voluptatum sed dignissimos sequi esse commodi,
                        praesentium nihil minima est. Dolorum similique nihil quam quos! Explicabo
                        exercitationem iure laboriosam distinctio.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam magnam dicta eaque porro et blanditiis. Sapiente eum doloribus fugiat deleniti voluptate repellat veniam, eligendi reprehenderit in ullam excepturi explicabo nemo.
                    </p>
                </div>
            </section>

            <section className="pre-footer">
                <div className="top-area">
                    <ul className="contact-info">
                        <li>
                            <a href="mailto:emmanuelonotiemoria@gmail.com<">
                                <i><FaEnvelope /></i>
                                <span>emmanuelonotiemoria@gmail.com</span>
                            </a>
                        </li>

                        <li>
                            <a href="tel:+2349035660900">
                                <i><FaPhoneAlt /></i>
                                <span>09035660900</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    <a href="http://whatsapp.com" target="_blank" rel="noreferrer nopener"><BsWhatsapp /></a>
                    <a href="http://linkedin.com" target="_blank" rel="noreferrer nopener"><BsLinkedin /></a>
                    <a href="http://instagram.com" target="_blank" rel="noreferrer nopener"><BsInstagram /></a>
                </div>
            </section>
        </div>
    )
}

export default Contact;