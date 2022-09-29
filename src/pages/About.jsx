import Hero from "../components/Hero";
import HeroImageAbout from "../assets/images/hero-image-about.png";

function About() {
	let pageBannerInfo = <span dangerouslySetInnerHTML={{ __html: "I am your guy,<br>Let's make magic!" }} />;
	return (
		<div>
			<Hero image={HeroImageAbout} textInfo={pageBannerInfo} />
			About
		</div>
	)
}

export default About;