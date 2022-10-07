// import { Children } from "react";
function Hero({ image, textInfo, extraInfo, imageStyles, displayBtns}) {
	return (
		<div>
			<section className="hero container">
				<div className="hero__inner">
					<div className="hero__img">
						<img src={image} alt="Hero" style={imageStyles} />
					</div>
					<div className="hero__info">
						<h1>{textInfo}</h1>
						<p>{extraInfo}</p>
						{displayBtns && <div className="hero__btns">
							<button type="button" className="btn btn__active">Works</button>
							<button type="button" className="btn">Reach Out</button>
						</div>}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Hero;