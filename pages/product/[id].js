import React from 'react';
import axios from "axios";
import styles from "./SingleProduct.module.scss";
import Image from "next/image";
import Rating from "../../components/Rating";
import { Button } from "antd";

const SingleProduct = ({ product }) => {
  const { name, image, rating, numReviews, price, description, countInStock } = product;
  return (
    <div className={'container'}>
      <div className={styles.product}>
        <div className={styles.image}>
          <Image src={image} alt={name} layout={'responsive'} width={800} height={600}/>
        </div>
        <div className={styles.content}>
          <h1>{name}</h1>
          <div className="bb"/>
          <Rating rating={rating} text={numReviews}/>
          <div className="bb"/>
          <div className={styles.price}>Price: <strong>${price}</strong></div>
          <div className="bb"/>
          <div className={styles.description}>{description}</div>
          <div className="bb"/>
          <div className={styles.stock}>
            Status: {countInStock >= 1 ? 'In stock' : 'Out of stock'}
          </div>
          <div className={styles.footer}>
            <Button disabled={countInStock === 0} type={'primary'}>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  try {
    const { data } = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    const product = data.data.find(item => item._id === id);
    return {
      props: {
        product: product
      }
    }
  } catch (e) {
    return {
      props: {
        product: {}
      }
    }
  }
}

export default SingleProduct;
