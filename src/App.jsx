import { Outlet } from 'react-router-dom'
import './App.css'
import NavTabs from './components/navTabs'

function App() {
  return (
    <>
        <header>
            <NavTabs />
        </header>
        <main className="container">
            <Outlet />
        </main>
    </>
  )
}

export default App
