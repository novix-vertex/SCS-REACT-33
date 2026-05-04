import MacWindow from './MacWindow'
import githubdata from '../../assets/github.json'
import GithubCard from '../GithubCard'

const Github = () => {
    return (
        <MacWindow>
            {githubdata.map((elem) => {
                return (
                    <GithubCard key={elem.id} project={elem}></GithubCard>
                );
            })}
        </MacWindow>
    )
}

export default Github