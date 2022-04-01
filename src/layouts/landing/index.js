import React, {useState, useEffect} from "react";

import "./styles.scss";
// import Header from "../../components/ui/header";

import Header from "../../components/ui/header";
import Backdrop from "../../components/ui/backdrop";
import { useLocation } from "react-router-dom";
// import Sidebar from "../../components/ui/dashboardNav";
// import Footer from "../../components/ui/footer";

const LandingLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const router = useLocation();

  useEffect(() => {
    setOpen(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  }, [router.pathname]);
  return (
    <div className='landing-layout'>

      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />

      <Header
        isOpen={open}
        clicked={() => {
          setOpen(!open);

          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />

      <main className='main'>{children}</main>

      {/* <Footer /> */}
    </div>
  );
};

export default LandingLayout;
