import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateProduct from './components/CreateProduct';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <div className="App">
     <h1>Scandiweb</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Product List</Link>
            </li>
            <li>
              <Link to="product/create">Create Product</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<ListProducts />} />
          <Route path="product/create" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
