import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './Layout';
import List from './page/Liste';
import Favori from './page/Favori';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<List />} />
            <Route path="/favori" element={<Favori />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
