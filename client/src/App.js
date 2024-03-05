import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import NavBarView from './components/NavBarView';
import Test from './components/Test';
import Home from './view/Home';
import OurMenu from './view/OurMenu';
import AboutUs from './view/AboutUs';

function App() {
  return (
    <>
      <NavBarView />
      <NavBarComponent />
      {/* <Test /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/ourMenu' element={<OurMenu />} />
        <Route exact path='/aboutUs' element={<AboutUs />} />
        <Route exact path='/test' element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
