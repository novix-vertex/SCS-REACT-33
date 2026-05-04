import './macwindow.scss'
import { Rnd } from 'react-rnd'

const MacWindow = ({ children }) => {
    return (
        <Rnd>
            <section className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
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