import Head from "next/head";
import axios from "axios";
import HomeScreen from "../screens/HomeScreen";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
    );
    return {
      props: {
        products: data.data
      }
    };
  } catch (e) {
    return {
      props: {
        products: []
      }
    };
  }
}
