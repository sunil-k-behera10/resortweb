
import './App.css';
import Activities from './components/Activities';
import Body from './components/Body';
import Bookings from './components/Bookings';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Photos from './components/Photos';

import Topbar from './components/Topbar';

function App() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Body/>
      <Activities/>
      <Photos/>
      <Bookings/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
