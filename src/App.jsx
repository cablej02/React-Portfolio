import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <>
        <Header />
        <main className="container" style={{ marginTop: '100px'}}>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default App
