import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Cli from './components/windows/Cli'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Pdf from './components/windows/Pdf'
import Spotify from './components/windows/Spotify'

const App = () => {
  return (
    <main>
      <Navbar />
      <Github />
      <Note />
      <Dock />
      <Pdf />
      <Spotify />
      <Cli />
    </main>
  )
}

export default App