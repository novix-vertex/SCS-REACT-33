const GithubCard = ({ project }) => {
    return (
        <>
            <div>{project.id}</div>
            <div>{project.title}</div>
            <div>{project.image}</div>
            <div>{project.description}</div>
            <div>{project.repoLink}</div>
            <div>{project.tags}</div>
            <div>{project.demoLink}</div>
        </>
    )
}

export default GithubCard