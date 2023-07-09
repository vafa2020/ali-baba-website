import Footer from "../component/Footer";
import Header from "../component/Header";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
