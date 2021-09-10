import React from 'react';
import axios from "axios";

const SingleProduct = () => {
  return (
    <div>

    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const products = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    console.log(products.data, 'products');

  } catch (e) {
    console.log(e, 'e')
  }
  const id = context.query.id;

  return {
    props: {
      post: []
    }
  };
}

export default SingleProduct;
