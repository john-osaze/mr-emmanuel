function Hero({ image, textInfo, extraInfo }) {
	return (
		<div>
			<section className="hero container">
				<div className="hero__inner">
					<div className="hero__img">
						<img src={image} alt="Hero" />
					</div>
					<div className="hero__info">
						<h1>{textInfo}</h1>
						<p>{extraInfo}</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Hero;