import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateProduct from './components/CreateProduct';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<ListProducts />} />
          <Route path="addproduct" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
