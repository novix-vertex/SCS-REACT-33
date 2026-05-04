import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/windows/Github'
import Note from './components/windows/Note'

const App = () => {
  return (
    <main>
      <Navbar />
      <Github />
      <Note />
      <Dock />
    </main>
  )
}

export default App