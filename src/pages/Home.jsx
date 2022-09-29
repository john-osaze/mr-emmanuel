import Hero from "../components/Hero";
import HeroImageHome from "../assets/images/hero-image-home.png";
import ProfilePic from "../assets/images/profile-pic.png";
import AdobeAI from "../assets/images/adobe-ai.png";
import AdobePS from "../assets/images/adobe-ps.png";
import AdobeXD from "../assets/images/adobe-xd.png";
import Figma from "../assets/images/figma.png";

function Home() {
	let pageBannerInfo = <span dangerouslySetInnerHTML={{ __html: "Hi!<br>I'm Emmanuel<br>Onotiemoria" }} />;

	return (
		<div>
			<Hero image={HeroImageHome} textInfo={pageBannerInfo} extraInfo="UI Designer" />
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

						<div className="profile__btns">
							<button type="button" className="btn btn__active">Reach Out</button>
							<button type="button" className="btn">Works</button>
						</div>
					</div>

					<div className="profile__pic">
						<img src={ProfilePic} alt="Profile Pic" />
					</div>
				</div>
			</section>

			<section className="preferred__tools container">
				<div className="title">
					<p style={{
						color: "#141414"
					}}>- Preferred Tools - </p>
				</div>
				<div className="preferred__tools__group">
					<img src={AdobeAI} alt="Adobe AI" />
					<img src={AdobePS} alt="Adobe PS" />
					<img src={AdobeXD} alt="Adobe XD" />
					<img src={Figma} alt="Figma" />
				</div>
			</section>
		</div>
	)
}

export default Home;