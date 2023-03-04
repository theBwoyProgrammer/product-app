import React from 'react'
import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';

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
  
  
</>
    
  )
}

export default ListProducts;