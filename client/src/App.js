// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
// import './App.css';
import NormieFeed from './pages/NormieFeed.jsx';
import CustomFeed from './pages/CustomFeed.jsx';
import Later from './pages/Later.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="body">
      <div className='navbar w-full'>
        <Navbar />
      </div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/normiefeed' element={ <NormieFeed />} />
          <Route path='/customfeed' element={<CustomFeed />} />
          <Route path='/later' element={<Later />} />

        </Routes>
    </div>
  );
}

export default App;
