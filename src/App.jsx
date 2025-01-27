import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';


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
