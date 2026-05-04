import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Cli from './components/windows/Cli'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Pdf from './components/windows/Pdf'
import Spotify from './components/windows/Spotify'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const App = () => {

  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    pdf: false,
    spotify: false,
    cli: false
  });

  return (
    <main>
      <Navbar />
      <Dock windowstate={windowState} setwindowState={setwindowState} />
      {windowState.github && <Github windowName="github" windowstate={windowState} setwindowState={setwindowState} />}
      {windowState.note && <Note windowName="note" windowstate={windowState} setwindowState={setwindowState} />}
      {windowState.pdf && <Pdf windowName="pdf" windowstate={windowState} setwindowState={setwindowState} />}
      {windowState.spotify && <Spotify windowName="spotify" windowstate={windowState} setwindowState={setwindowState} />}
      {windowState.cli && <Cli windowName="cli" windowstate={windowState} setwindowState={setwindowState} />}
    </main>
  )
}

export default App