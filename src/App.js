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

import VolkovBio from './Volkov/VolkovBio.jsx';
import VolkovPictures from './Volkov/VolkovPictures.jsx';
import VolkovPicture1 from './Volkov/VolkovPicture1.jsx';
import VolkovPicture1Info from './Volkov/VolkovPicture1Info.jsx';
import VolkovPicture2 from './Volkov/VolkovPicture2.jsx';
import VolkovPicture2Info from './Volkov/VolkovPicture2Info.jsx';

import CleverBio from './Clever/CleverBio.jsx';
import CleverPictures from './Clever/CleverPictures.jsx';
import CleverPicture1 from './Clever/CleverPicture1.jsx';
import CleverPicture1Info from './Clever/CleverPicture1Info.jsx';
import CleverPicture2 from './Clever/CleverPicture2.jsx';
import CleverPicture2Info from './Clever/CleverPicture2Info.jsx';

import KuprinBio from './Kuprin/KuprinBio.jsx';
import KuprinPictures from './Kuprin/KuprinPictures.jsx';
import KuprinPicture1 from './Kuprin/KuprinPicture1.jsx';
import KuprinPicture1Info from './Kuprin/KuprinPicture1Info.jsx';
import KuprinPicture2 from './Kuprin/KuprinPicture2.jsx';
import KuprinPicture2Info from './Kuprin/KuprinPicture2Info.jsx';

import SapunovBio from './Sapunov/SapunovBio.jsx';
import SapunovPictures from './Sapunov/SapunovPictures.jsx';
import SapunovPicture1 from './Sapunov/SapunovPicture1.jsx';
import SapunovPicture1Info from './Sapunov/SapunovPicture1Info.jsx';
import SapunovPicture2 from './Sapunov/SapunovPicture2.jsx';
import SapunovPicture2Info from './Sapunov/SapunovPicture2Info.jsx';

import MokrickiyBio from './Mokrickiy/MokrickiyBio.jsx';
import MokrickiyPictures from './Mokrickiy/MokrickiyPictures.jsx';
import MokrickiyPicture1 from './Mokrickiy/MokrickiyPicture1.jsx';
import MokrickiyPicture1Info from './Mokrickiy/MokrickiyPicture1Info.jsx';
import MokrickiyPicture2 from './Mokrickiy/MokrickiyPicture2.jsx';
import MokrickiyPicture2Info from './Mokrickiy/MokrickiyPicture2Info.jsx';
import ArgunovBio from './Argunov/ArgunovBio.jsx';
import ArgunovPictures from './Argunov/ArgunovPictures.jsx';
import ArgunovPicture1 from './Argunov/ArgunovPicture1.jsx';
import ArgunovPicture1Info from './Argunov/ArgunovPicture1Info.jsx';
import ArgunovPicture2 from './Argunov/ArgunovPicture2.jsx';
import ArgunovPicture2Info from './Argunov/ArgunovPicture2Info.jsx';

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

         <Route path="forgoten-artists/main-menu/volkov" element={<VolkovBio />} />
         <Route path="forgoten-artists/main-menu/volkov/pictures" element={<VolkovPictures />} />
         <Route path="forgoten-artists/main-menu/volkov/pictures/picture1" element={<VolkovPicture1 />} />
         <Route path="forgoten-artists/main-menu/volkov/pictures/picture1/info" element={<VolkovPicture1Info />} />
         <Route path="forgoten-artists/main-menu/volkov/pictures/picture2" element={<VolkovPicture2 />} />
         <Route path="forgoten-artists/main-menu/volkov/pictures/picture2/info" element={<VolkovPicture2Info />} />

         <Route path="forgoten-artists/main-menu/clever" element={<CleverBio />} />
         <Route path="forgoten-artists/main-menu/clever/pictures" element={<CleverPictures />} />
         <Route path="forgoten-artists/main-menu/clever/pictures/picture1" element={<CleverPicture1 />} />
         <Route path="forgoten-artists/main-menu/clever/pictures/picture1/info" element={<CleverPicture1Info />} />
         <Route path="forgoten-artists/main-menu/clever/pictures/picture2" element={<CleverPicture2 />} />
         <Route path="forgoten-artists/main-menu/clever/pictures/picture2/info" element={<CleverPicture2Info />} />

         <Route path="forgoten-artists/main-menu/kuprin" element={<KuprinBio />} />
         <Route path="forgoten-artists/main-menu/kuprin/pictures" element={<KuprinPictures />} />
         <Route path="forgoten-artists/main-menu/kuprin/pictures/picture1" element={<KuprinPicture1 />} />
         <Route path="forgoten-artists/main-menu/kuprin/pictures/picture1/info" element={<KuprinPicture1Info />} />
         <Route path="forgoten-artists/main-menu/kuprin/pictures/picture2" element={<KuprinPicture2 />} />
         <Route path="forgoten-artists/main-menu/kuprin/pictures/picture2/info" element={<KuprinPicture2Info />} />

         <Route path="forgoten-artists/main-menu/sapunov" element={<SapunovBio />} />
         <Route path="forgoten-artists/main-menu/sapunov/pictures" element={<SapunovPictures />} />
         <Route path="forgoten-artists/main-menu/sapunov/pictures/picture1" element={<SapunovPicture1 />} />
         <Route path="forgoten-artists/main-menu/sapunov/pictures/picture1/info" element={<SapunovPicture1Info />} />
         <Route path="forgoten-artists/main-menu/sapunov/pictures/picture2" element={<SapunovPicture2 />} />
         <Route path="forgoten-artists/main-menu/sapunov/pictures/picture2/info" element={<SapunovPicture2Info />} />

         <Route path="forgoten-artists/main-menu/mokrickiy" element={<MokrickiyBio />} />
         <Route path="forgoten-artists/main-menu/mokrickiy/pictures" element={<MokrickiyPictures />} />
         <Route path="forgoten-artists/main-menu/mokrickiy/pictures/picture1" element={<MokrickiyPicture1 />} />
         <Route path="forgoten-artists/main-menu/mokrickiy/pictures/picture1/info" element={<MokrickiyPicture1Info />} />
         <Route path="forgoten-artists/main-menu/mokrickiy/pictures/picture2" element={<MokrickiyPicture2 />} />
         <Route path="forgoten-artists/main-menu/mokrickiy/pictures/picture2/info" element={<MokrickiyPicture2Info />} />

         <Route path="forgoten-artists/main-menu/argunov" element={<ArgunovBio />} />
         <Route path="forgoten-artists/main-menu/argunov/pictures" element={<ArgunovPictures />} />
         <Route path="forgoten-artists/main-menu/argunov/pictures/picture1" element={<ArgunovPicture1 />} />
         <Route path="forgoten-artists/main-menu/argunov/pictures/picture1/info" element={<ArgunovPicture1Info />} />
         <Route path="forgoten-artists/main-menu/argunov/pictures/picture2" element={<ArgunovPicture2 />} />
         <Route path="forgoten-artists/main-menu/argunov/pictures/picture2/info" element={<ArgunovPicture2Info />} />
         
       </Routes>
      </Router>
    </div>
    
  );
}

export default App;
