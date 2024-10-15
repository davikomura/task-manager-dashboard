import './App.css'
import { useLocation } from 'react-router-dom';
import { Header } from './components/common/Header'
import { Outlet } from 'react-router-dom'
import { TopBar } from './components/common/TopBar'

function App() {
  const location = useLocation();

  const isLoginOrSignUpPage = location.pathname === '/Login' || location.pathname === '/Register';
  const isSettings = location.pathname === '/Settings'

  return (
    <>
      {!isLoginOrSignUpPage && !isSettings && <TopBar />}
      {!isLoginOrSignUpPage && <Header />}
      <Outlet />
    </>
  )
}

export default App
