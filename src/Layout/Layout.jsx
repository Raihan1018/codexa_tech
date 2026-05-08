import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    // min-h-screen ensures the footer stays at the bottom on short pages
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content area constrained to your max-width */}
      <main className="flex-1 container mx-auto max-w-screen-xl">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
