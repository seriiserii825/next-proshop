import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "../Rating";
import styles from "./product.module.css";

function Product({ name, image, _id, price, rating, numReviews }) {
  return (
    <div className={styles.product}>
      <Link href={`/product/${_id}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={image}
              width={400}
              layout="intrinsic"
              height={300}
              alt={name}
            />
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>{name}</h3>
            <Rating rating={rating} text={numReviews} />
            <div className={styles.price}>${price}</div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Product;
