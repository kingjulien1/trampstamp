import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-2xl ml-auto mr-auto prose py-10 px-6">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
