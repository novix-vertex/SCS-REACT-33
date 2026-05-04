import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/windows/MacWindow'

const App = () => {
  return (
    <main>
      <Navbar />
      <MacWindow><h1>Hello</h1></MacWindow>
      <Dock />
    </main>
  )
}

export default App