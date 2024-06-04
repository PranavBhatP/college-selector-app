import { Container, Typography } from '@mui/material';
import './index.css';
import Home from './pages/Home';
import { Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App"> { /* React router for handling routes.*/}
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>          
        <Route exact path = '/dashboard' element = {<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
