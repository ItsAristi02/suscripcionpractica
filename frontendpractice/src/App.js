
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import Subscription from './pages/Subscription';
import InformesClientes from './components/helpers/InformesClientes';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="Subscription" element={<Subscription />} />
          <Route path="InformesClientes" element={<InformesClientes />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
