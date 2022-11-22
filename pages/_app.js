import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "../globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="ml-auto mr-auto mb-20 py-10 px-6 min-h-screen max-w-2xl xl:max-w-4xl prose">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
