import React from 'react';
import Products from "../components/front/Products";

function HomeScreen({ products }) {
  return (
    <div className={'container'}>
      <Products products={products}/>
    </div>
  );
}

export default HomeScreen;