import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Beranda from './Beranda/Beranda';
import Footer from './Footer';
import Layanan from './Layanan/Layanan';
import Fitur from './Fitur/fiturRumah';
import Kontak from './Kontak/Kontak';

function App() {
  return (
    <div className="App bg-BackgroundColor font-Poppins">
      <Navbar />
      <Routes basename="/Rumah-Impian">
        <Route>
          <Route path="/Rumah-Impian/" element={<Beranda />} />
          <Route path="/Rumah-Impian/Layanan" element={<Layanan />} />
          <Route path="/Rumah-Impian/Fitur" element={<Fitur />} />
          <Route path="/Rumah-Impian/Kontak" element={<Kontak />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
