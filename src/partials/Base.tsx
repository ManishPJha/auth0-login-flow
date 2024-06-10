import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
