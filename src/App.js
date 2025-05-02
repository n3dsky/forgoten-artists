import './App.css';
import Landing from './Landing/Landing.jsx';
import StartPage from './StartPage/StartPage.jsx'
import ArtistsBiography from './ArtistBiography/AtristsBiography.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
         <Route path="forgoten-artists/" element={<StartPage />} />
         <Route path="forgoten-artists/main-menu" element={<Landing />} />
         <Route path="forgoten-artists/main-menu/smirnov" element={<ArtistsBiography />} />
       </Routes>
      </Router>
    </div>
    
  );
}

export default App;
