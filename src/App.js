import './App.css';
import Landing from './Landing/Landing.jsx';
import StartPage from './StartPage/StartPage.jsx'
import SmirnovBio from './Smirnov/SmirnovBio.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmirnovPictures from './Smirnov/SmirnovPictures.jsx';
import SmirnovPicture1 from './Smirnov/SmirnovPicture1.jsx'
import SmirnovPicture1Info from './Smirnov/SmirnovPicture1Info.jsx';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
         <Route path="forgoten-artists/" element={<StartPage />} />
         <Route path="forgoten-artists/main-menu" element={<Landing />} />
         <Route path="forgoten-artists/main-menu/smirnov" element={<SmirnovBio />} />
         <Route path="forgoten-artists/main-menu/smirnov/pictures" element={<SmirnovPictures />} />
         <Route path="forgoten-artists/main-menu/smirnov/pictures/picture1" element={<SmirnovPicture1 />} />
         <Route path="forgoten-artists/main-menu/smirnov/pictures/picture1/info" element={<SmirnovPicture1Info />} />
         
       </Routes>
      </Router>
    </div>
    
  );
}

export default App;
