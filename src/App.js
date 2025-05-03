import './App.css';
import Landing from './Landing/Landing.jsx';
import StartPage from './StartPage/StartPage.jsx'
import SmirnovBio from './Smirnov/SmirnovBio.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmirnovPictures from './Smirnov/SmirnovPictures.jsx';
import SmirnovPicture1 from './Smirnov/SmirnovPicture1.jsx'
import SmirnovPicture1Info from './Smirnov/SmirnovPicture1Info.jsx';
import SmirnovPicture2 from './Smirnov/SmirnovPicture2.jsx'
import SmirnovPicture2Info from './Smirnov/SmirnovPicture2Info.jsx';

import ScottiBio from './Scotti/ScottiBio.jsx';
import ScottiPictures from './Scotti/ScottiPictures.jsx';
import ScottiPicture1 from './Scotti/ScottiPicture1.jsx';
import ScottiPicture1Info from './Scotti/ScottiPicture1Info.jsx';
import ScottiPicture2 from './Scotti/ScottiPicture2.jsx';
import ScottiPicture2Info from './Scotti/ScottiPicture2Info.jsx';

import SokolovBio from './Sokolov/SokolovBio.jsx';
import SokolovPictures from './Sokolov/SokolovPictures.jsx';
import SokolovPicture1 from './Sokolov/SokolovPicture1.jsx';
import SokolovPicture1Info from './Sokolov/SokolovPicture1Info.jsx';
import SokolovPicture2 from './Sokolov/SokolovPicture2.jsx';
import SokolovPicture2Info from './Sokolov/SokolovPicture2Info.jsx';

import SorokaBio from './Soroka/SorokaBio.jsx';
import SorokaPictures from './Soroka/SorokaPictures.jsx';
import SorokaPicture1 from './Soroka/SorokaPicture1.jsx';
import SorokaPicture1Info from './Soroka/SorokaPicture1Info.jsx';
import SorokaPicture2 from './Soroka/SorokaPicture2.jsx';
import SorokaPicture2Info from './Soroka/SorokaPicture2Info.jsx';

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
         <Route path="forgoten-artists/main-menu/smirnov/pictures/picture2" element={<SmirnovPicture2 />} />
         <Route path="forgoten-artists/main-menu/smirnov/pictures/picture2/info" element={<SmirnovPicture2Info />} />

         <Route path="forgoten-artists/main-menu/scotti" element={<ScottiBio />} />
         <Route path="forgoten-artists/main-menu/scotti/pictures" element={<ScottiPictures />} />
         <Route path="forgoten-artists/main-menu/scotti/pictures/picture1" element={<ScottiPicture1 />} />
         <Route path="forgoten-artists/main-menu/scotti/pictures/picture1/info" element={<ScottiPicture1Info />} />
         <Route path="forgoten-artists/main-menu/scotti/pictures/picture2" element={<ScottiPicture2 />} />
         <Route path="forgoten-artists/main-menu/scotti/pictures/picture2/info" element={<ScottiPicture2Info />} />

         <Route path="forgoten-artists/main-menu/sokolov" element={<SokolovBio />} />
         <Route path="forgoten-artists/main-menu/sokolov/pictures" element={<SokolovPictures />} />
         <Route path="forgoten-artists/main-menu/sokolov/pictures/picture1" element={<SokolovPicture1 />} />
         <Route path="forgoten-artists/main-menu/sokolov/pictures/picture1/info" element={<SokolovPicture1Info />} />
         <Route path="forgoten-artists/main-menu/sokolov/pictures/picture2" element={<SokolovPicture2 />} />
         <Route path="forgoten-artists/main-menu/sokolov/pictures/picture2/info" element={<SokolovPicture2Info />} />

         <Route path="forgoten-artists/main-menu/soroka" element={<SorokaBio />} />
         <Route path="forgoten-artists/main-menu/soroka/pictures" element={<SorokaPictures />} />
         <Route path="forgoten-artists/main-menu/soroka/pictures/picture1" element={<SorokaPicture1 />} />
         <Route path="forgoten-artists/main-menu/soroka/pictures/picture1/info" element={<SorokaPicture1Info />} />
         <Route path="forgoten-artists/main-menu/soroka/pictures/picture2" element={<SorokaPicture2 />} />
         <Route path="forgoten-artists/main-menu/soroka/pictures/picture2/info" element={<SorokaPicture2Info />} />

         
       </Routes>
      </Router>
    </div>
    
  );
}

export default App;
