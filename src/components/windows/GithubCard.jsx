import './github.scss'
const GithubCard = ({ project }) => {
    return (
        <div className="github-card" id={project.id}>
            <img src={project.image} alt="" />
            <h1>{project.title}</h1>
            <p className='desc'>{project.description}</p>
            <div className='tags'>
                {project.tags.map((tag, index) => {
                    return <span key={index}>{tag}</span>
                })}
            </div>
            <div className='links'>
                {project.repoLink && <a href={project.repoLink} target="_blank" className='repo-link'>Git Repo</a>}
                {project.demoLink && <a href={project.demoLink} target="_blank" className='demo-link'>Demo</a>}
            </div>
        </div>
    )
}

export default GithubCard