import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Images from './pages/Images';
import Store from './pages/Store';
import Gmail from './pages/Gmail';
import {Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/gmail" element={<Gmail/>} />
        <Route path="/images" element={<Images/>} />
      </Routes>
    </>
  );
}

export default App;
