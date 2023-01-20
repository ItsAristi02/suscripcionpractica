
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import Subscription from './pages/Subscription';
import InformesClientes from './pages/InformesClientes';
import Carrusel from './pages/Carrusel';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="Subscription" element={<Subscription />} />
          <Route path="Informes" element={<InformesClientes />} />
          <Route path="Colecciones" element={<Carrusel />}/> 
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
