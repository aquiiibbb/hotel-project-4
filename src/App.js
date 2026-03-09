import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import Accommondation from "./pages/accommondations";
import Dining from "./pages/dining";
import Drawing from "./pages/drawing";
import Gallery from "./pages/gallery";
import Neigh from "./pages/neigh";
import Poolgym from "./pages/poolgym";
import Press from "./pages/press";
import Shibui from "./pages/shibui";

/* NEW PAGES */
import GuestGallery from "./pages/guestGallery";
import HotelGallery from "./pages/hotelGallery";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/accommondations" element={<Accommondation />} />

        <Route path="/dining" element={<Dining />} />

        <Route path="/drawing" element={<Drawing />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/guest-gallery" element={<GuestGallery />} />

        <Route path="/hotel-gallery" element={<HotelGallery />} />

        <Route path="/neigh" element={<Neigh />} />

        <Route path="/poolgym" element={<Poolgym />} />

        <Route path="/press" element={<Press />} />

        <Route path="/shibui" element={<Shibui />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;