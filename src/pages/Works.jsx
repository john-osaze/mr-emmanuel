import Hero from "../components/Hero";
import HeroImageWorks from "../assets/images/hero-image-works.png";

function Works() {
    let pageBannerInfo = <span dangerouslySetInnerHTML={{ __html: "Welcome!<br>Check out my <br> space" }} />;

    return (
        <div>
			<Hero image={HeroImageWorks} textInfo={pageBannerInfo} extraInfo="Share your thoughts"/>
			Works
        </div>
    )
}

export default Works;