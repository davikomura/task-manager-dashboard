import './App.css'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { TopBar } from './components/TopBar/TopBar'

function App() {

  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
    </>
  )
}

export default App
