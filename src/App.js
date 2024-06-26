
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
import Signup from './Pages/Signup/Signup';
import Message from './Pages/Message/Message';
import Images from './Pages/Images/Images';

function App() {
  const user = localStorage.getItem("token")
  // console.log(process.env.REACT_APP_SERVICE);
  return (
    <>
      <Router>
        <>
          <Notifications />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            {/* <Route path='/home' element={<Home />} /> */}
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
            {!user && <Route path='/admin' element={<Admin />} />}
            {/* <Route path='/admin' element={<Admin />} /> */}
            {user && <Route path='/signup' element={<Signup />} />}
            {/* <Route path='/login' element={<Login />} /> */}
            {user && <Route path='/upload' element={<Upload />} />}
            {user && <Route path='/images' element={<Images />} />}
            {user && <Route path='/messages' element={<Message />} />}

            <Route exact path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
