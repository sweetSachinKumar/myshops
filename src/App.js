import './App.css';
 import Sidebar from './E-component/Sidebar';
import { Route, Routes, BrowserRouter as Router  } from 'react-router-dom';
import Navbar from './E-component/Navbar';
import Home from './E-component/Home';
import { ProductContext } from './e-context/ProductContext';
import { useContext } from 'react';
import ProductDetails from './E-component/ProductDetails';

// import { useState } from 'react';
// import LoadingBar from 'react-top-loading-bar';
function App() {
  const { progress, LoadingBar, setProgress} = useContext(ProductContext)

  // const [progress , setProgress] = useState(LoadingBar)
  return (
    <>
    <Router>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

    <Navbar/>
    <Sidebar/>
      <Routes>
        <Route  path='/' element={<Home   /> } />
        <Route  path='/product/:id' element={<ProductDetails/> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
