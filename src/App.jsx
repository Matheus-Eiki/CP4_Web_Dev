import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './routes/Error';
import Home from './routes/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="*" element={<Error/>}/>
            <Route path="/" element={<Home/>}/>  
          </Routes>
        <Footer/> {/*footer fora do routes*/}
      </BrowserRouter>
    </>
  )
}

export default App
