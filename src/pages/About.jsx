import Hero from "../components/Hero";
import HeroImageAbout from "../assets/images/hero-image-about.png";

function About() {
	return (
		<div>
			<Hero image={HeroImageAbout}/>
			About
		</div>
	)
}

export default About;