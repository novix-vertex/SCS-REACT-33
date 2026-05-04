import MacWindow from './MacWindow'
import githubdata from '../../assets/github.json'
import GithubCard from './GithubCard';
import './github.scss'

const Github = ({ windowName, windowState, setwindowState }) => {
    return (
        <MacWindow x={50} y={80} width={"40vw"} height={"60vh"} windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
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