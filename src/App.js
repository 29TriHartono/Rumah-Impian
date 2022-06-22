import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Beranda from './Beranda/Beranda';
import Footer from './Component/Footer';
import Layanan from './Layanan/Layanan';
import Fitur from './Fitur/fiturRumah';
import Kontak from './Kontak/Kontak';

function App() {
  return (
    <div className="App bg-BackgroundColor font-Poppins">
      <Navbar />
      <Routes basename="/Rumah-Impian">
        <Route>
          <Route path="/" element={<Beranda />} />
          <Route path="/Layanan" element={<Layanan />} />
          <Route path="/Fitur" element={<Fitur />} />
          <Route path="/Kontak" element={<Kontak />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
