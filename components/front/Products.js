import React from "react";
import Product from "./Product";
import styles from "./products.module.css";

function Products({ products }) {
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
