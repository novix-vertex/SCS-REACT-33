import './macwindow.scss'
import { Rnd } from 'react-rnd'

const MacWindow = ({x,y,width,height, children, windowName, setwindowState }) => {
    return (
        <Rnd
        default={{
            width:width,
            height:height,
            x:x,
            y:y
        }}>
            <section className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red" onClick={()=>{setwindowState(state=>({ ...state, [windowName]: false }))}}></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title">shiny - zsh</div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </section>
        </Rnd>
    )
}

export default MacWindow