import "../styles/globals.css";
import Header from "../components/front/Header";
import Footer from "../components/front/Footer";

function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <main className={"main"}>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </main>
    <Footer/>
  </>;
}

export default MyApp;
