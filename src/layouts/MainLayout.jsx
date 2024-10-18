import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({children}) => {
  return <>
    <Navbar/>
      <main className="w-full h-auto">
        <section className="w-full max-w-[1200px] m-auto mt-4 mb-4 px-2">
          {children}
        </section>
      </main>
    <Footer />
  </>
};

export default MainLayout;
