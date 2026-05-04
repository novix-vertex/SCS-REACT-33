import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Pdf from './components/windows/Pdf'

const App = () => {
  return (
    <main>
      <Navbar />
      <Github />
      <Note />
      <Dock />
      <Pdf />
    </main>
  )
}

export default App