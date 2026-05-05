import './dock.scss'

const Dock = ({ windowState, setwindowState }) => {
    return (
        <footer className='dock'>
            <div title="Github" className="icon github" onClick={() => setwindowState(state=> ({ ...state, github: true }))}>
                <img src="./dock-icons/github.svg" alt="github icon" />
            </div>
            <div title="Note"  className="icon note" onClick={() => setwindowState(state=> ({ ...state, note: true })) }>
                <img src="./dock-icons/note.svg" alt="note icon" />
            </div>
            <div title="PDF" className="icon pdf" onClick={() => setwindowState(state=> ({ ...state, pdf: true }))}>
                <img src="./dock-icons/pdf.svg" alt="pdf icon" />
            </div>
            <div title="Calendar" className="icon calendar" onClick={()=>{window.open("https://calendar.google.com","_blank")}}>
                <img src="./dock-icons/calendar.svg" alt="calendar icon" />
            </div>
            <div title="Spotify" className="icon spotify" onClick={() => setwindowState(state=> ({ ...state, spotify: true }))}>
                <img src="./dock-icons/spotify.svg" alt="spotify icon" />
            </div>
            <div title="Mail" className="icon mail" onClick={()=>{window.open("mailto:shiny@example.com","_blank")}}>
                <img src="./dock-icons/mail.svg" alt="mail icon" />
            </div>
            <div title="LinkedIn" className="icon link" onClick={()=>{window.open("https://www.linkedin.com","_blank")}}>
                <img src="./dock-icons/link.svg" alt="link icon" />
            </div>
            <div title="Terminal" className="icon cli" onClick={() => setwindowState(state=> ({ ...state, cli: true }))}>
                <img src="./dock-icons/cli.svg" alt="cli icon" />
            </div>
        </footer>
    )
}

export default Dock