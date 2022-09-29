import Hero from "../components/Hero";
import HeroImageContact from "../assets/images/hero-image-contact.png";

function Contact() {
    let extraInfo = <span dangerouslySetInnerHTML={{ __html: "I am ready to help you with any UI design &<br>research challenge you might have" }} />
    return (
        <div>
			<Hero image={HeroImageContact} textInfo="Let's get in touch" extraInfo={extraInfo}/>
			Contact
        </div>
    )
}

export default Contact;