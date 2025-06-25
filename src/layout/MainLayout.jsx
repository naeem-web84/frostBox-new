import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../pages/ScrollTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
      </header>

      <main className="max-w-7xl mx-auto px-4 min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
