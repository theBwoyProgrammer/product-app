import React from 'react'
import { Link } from 'react-router-dom';

function ListProducts() {
  return (
<>
    <nav>
    <ul>
      <li>
        <Link to="/">Product List</Link>
      </li>
      <li>
        <Link to="addproduct">Create Product</Link>
      </li>
    </ul>
  </nav>
  <h1>ListProducts</h1>
</>
    
  )
}

export default ListProducts;