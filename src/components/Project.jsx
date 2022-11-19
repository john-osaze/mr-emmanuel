import { Link } from "react-router-dom"

const Project = ({ projectImg, projectName, projectLink }) => {
    return (
        <>
            <Link exact="true" to={projectLink}>
                <div className="single-project">
                    <div className="project-img">
                        <img src={projectImg} alt="" />
                    </div>
                    <div className="project-name">
                        <p>{projectName}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Project