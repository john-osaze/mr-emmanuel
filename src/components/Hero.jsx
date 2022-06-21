import React from 'react';
import HeroImageHome from "../assets/images/hero-image-home.png";

function Hero() {
  return (
	<div>
		<section className="hero container">
				<div className="hero__inner">
					<div className="hero__img">
						<img src={HeroImageHome} alt="Hero" />
					</div>
					<div className="hero__info">
						<h1>Hi! <br />
							I'm Emmanuel <br />
							Onotiemoria
						</h1>
						<p>UI Designer</p>
					</div>
				</div>
			</section>
	</div>
  )
}

export default Hero