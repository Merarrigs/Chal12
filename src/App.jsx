import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './styles/global.css'

function App() {

  return (
    <>
      <Navigation/>
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
