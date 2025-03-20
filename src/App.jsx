import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './routes/Error';
import Home from './routes/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error/>}/>
          <Route path="/" element={<Home/>}/>  
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
