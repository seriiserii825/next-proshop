import React from 'react';
import styles from "./product.module.css";
import Image from "next/image";
import Link from "next/link";

function Product({ name, image, _id, price, rating, numReviews }) {
  return (
    <div className={styles.product}>
      <Link href={`/product/${_id}`}>
        <a>
          <div className={styles.image}>
            <Image src={image} width={400} layout={'intrinsic'} height={300} alt={name}/>
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.data}>
              <span>{rating} from {numReviews} reviews</span>
            </div>
            <div className={styles.price}>${price}</div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Product;