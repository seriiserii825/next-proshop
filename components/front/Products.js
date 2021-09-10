import React from "react";
import styles from "./products.module.css";
import products from "../../data/products";
import Product from "./Product";

function Products() {
  return (
    <>
      <h2 className="title">Latest products</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product._id}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;