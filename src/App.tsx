import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { CarList } from './pages/CarList';
import { NotFound } from './pages/NotFound';
import { EditCar } from './pages/EditCar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/car" element={<EditCar />} />
          <Route path="/car/:id" element={<EditCar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
