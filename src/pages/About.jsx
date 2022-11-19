import Hero from "../components/Hero";
import HeroImageAbout from "../assets/images/hero-image-about.png";
import AboutImg from "../assets/images/about-pic.png";
import {BsLinkedin, BsWhatsapp, BsInstagram} from 'react-icons/bs'

function About() {
	let pageBannerInfo = <span dangerouslySetInnerHTML={{ __html: "I am your guy,<br>Let's make magic!" }} />;
	return (
		<div>
			<Hero image={HeroImageAbout} textInfo={pageBannerInfo} imageStyles={{ marginLeft: "-150px", width: "135%" }} displayBtns={true}>
			</Hero>

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
					<h1>Let's Connect</h1>
					<p>Send a message</p>
				</div>

				<div className="social-media">
					<a href="https://whatsapp.com" target="_blank" rel="noreferrer nopener"><BsWhatsapp/></a>
					<a href="https://linkedin.com" target="_blank" rel="noreferrer nopener"><BsLinkedin/></a>
					<a href="https://instagram.com" target="_blank" rel="noreferrer nopener"><BsInstagram/></a>
				</div>
			</section>
		</div>
	)
}

export default About;