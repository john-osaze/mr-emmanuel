import Hero from "../components/Hero";
import Project from "../components/Project";
import ProjectImage1 from "../assets/images/project-1.png";
import ProjectImage2 from "../assets/images/project-2.png";
import ProjectImage3 from "../assets/images/project-3.png";
import ProjectImage4 from "../assets/images/project-4.png";
import ProjectImage5 from "../assets/images/project-5.png";
import ProjectImage6 from "../assets/images/project-6.png";
import HeroImageWorks from "../assets/images/hero-image-works.png";

function Works() {
    let pageBannerInfo = <span dangerouslySetInnerHTML={{ __html: "Welcome!<br>Check out my <br> space" }} />;

    return (
        <div>
            <Hero image={HeroImageWorks} textInfo={pageBannerInfo} extraInfo="Share your thoughts" imageStyles={{
                marginLeft: "-150px",
                width: "140%"
            }} />

            <section className="profile container">
                <div className="title">
                    <p>- Profile - </p>
                </div>
                
                <div className="project-wrapper">
                    <Project projectImg={ProjectImage1} projectName={"Lorem Ninja Ipsum"} projectLink="/"/>
                    <Project projectImg={ProjectImage2} projectName={"Lorem Ninja Ipsum"} projectLink="/"/>
                    <Project projectImg={ProjectImage3} projectName={"Lorem Ninja Ipsum"} projectLink="/"/>
                    <Project projectImg={ProjectImage4} projectName={"Lorem Ninja Ipsum"} projectLink="/"/>
                    <Project projectImg={ProjectImage5} projectName={"Lorem Ninja Ipsum"} projectLink="/"/>
                    <Project projectImg={ProjectImage6} projectName={"Lorem Ninja Ipsum"} projectLink="/"/>
                </div>
            </section>
        </div>
    )
}

export default Works;