
import './App.css';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import Product from './Pages/Product/Product';
import Contact from './Pages/Contact/Contact';
// import Login from './Pages/Login/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Notifications from './Components/Notifications';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Upload from './Pages/Upload/Upload';
import Admin from './Pages/Admin/Admin';

function App() {
  return (
    <>
      <Router>
        <>
          <Notifications />
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/product' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin' element={<Admin />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/upload' element={<Upload />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
