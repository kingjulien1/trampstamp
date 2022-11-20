import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
