import MacWindow from './MacWindow'
import githubdata from '../../assets/github.json'
import GithubCard from './GithubCard';
import './github.scss'

const Github = () => {
    return (
        <MacWindow>
            <div className='github-cards'>
                {githubdata.map((elem) => {
                    return (
                        <GithubCard key={elem.id} project={elem}></GithubCard>
                    );
                })}
            </div>
        </MacWindow>
    )
}

export default Github