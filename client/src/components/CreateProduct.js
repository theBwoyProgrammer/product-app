import React from 'react'
import { useState } from 'react';

function CreateProduct() {

  const [productType, setProductType] = useState('');

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({values, [name]: value}));

  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
  }
  
  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };
  
  const dvdSection = (
    <div>
      <label htmlFor="size">Size (in MB):</label>
      <input type="text" id="size" name="size" />
    </div>
  );
  
  const bookSection = (
    <div>
      <label htmlFor="weight">Weight (in Kg):</label>
      <input type="text" id="weight" name="weight" />
    </div>
  );
  
  const furnitureSection = (
    <div>
      <label htmlFor="height">Height (in cm):</label>
      <input type="text" id="height" name="height" onChange={handleChange}/>
      <label htmlFor="width">Width (in cm):</label>
      <input type="text" id="width" name="width" onChange={handleChange} />
      <label htmlFor="length">Length (in cm):</label>
      <input type="text" id="length" name="length" onChange={handleChange} />
    </div>
  );
  
  let selectedProductSection;
  
  if (productType === 'dvd') {
    selectedProductSection = dvdSection;
  } else if (productType === 'book') {
    selectedProductSection = bookSection;
  } else if (productType === 'furniture') {
    selectedProductSection = furnitureSection;
  }

  return (
<>
  <nav>
    <ul>
      <li>
      <h1>CreateProduct</h1>
      </li>
      <li>
        <button form='product_form'>Save</button>
      </li>
      <li>
        <button>Cancel</button>
      </li>
    </ul>
  </nav>

  <form id='product_form' onSubmit={handleSubmit}>
      <label>SKU: </label>
      <input type="text" name="sku" onChange={handleChange} />
      <br />

      <label>Name: </label>
      <input type="text" name="name" onChange={handleChange} />
      <br />

      <label>Price: </label>
      <input type="text" name="price" onChange={handleChange} />
      <br />

      <div>
        <label htmlFor="product-type">Select Product Type:</label>
        <select id="productType" value={productType} onChange={handleProductTypeChange}>
          <option value="">Select a product type</option>
          <option value="dvd">DVD</option>
          <option value="book">Book</option>
          <option value="furniture">Furniture</option>
        </select>
        
        {selectedProductSection}
      </div>
  </form>
</>
  )
}

export default CreateProduct;