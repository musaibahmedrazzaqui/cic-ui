import React, { useState } from "react";
import Footer from "../components/footer";
import {
  ISO90012015,
  ISO140012015,
  ISO450012018,
  ISO270012022,
  ISO223012019,
  ISO134852016,
  ISO310002018,
  ISO220002018,
  FSSC22000,
  HACCP,
} from "../components/certifications";
import { NavbarTwo } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

export const CertificationsPage1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarTwo toggle={toggle} />
      {/* <Signin /> */}
      <ISO90012015 />
      <Footer />
    </>
  );
};

// export default CertificationsPage1;

export const CertificationsPage2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarTwo toggle={toggle} />
      {/* <Signin /> */}
      <ISO140012015 />
      <Footer />
    </>
  );
};
export const CertificationsPage3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarTwo toggle={toggle} />
      {/* <Signin /> */}
      <ISO450012018 />
      <Footer />
    </>
  );
};

export const CertificationsPage4 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarTwo toggle={toggle} />
      {/* <Signin /> */}
      <ISO270012022 />
      <Footer />
    </>
  );
};

export const CertificationsPage5 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarTwo toggle={toggle} />
      {/* <Signin /> */}
      <ISO223012019 />
      <Footer />
    </>
  );
};

export const CertificationsPage6 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarTwo toggle={toggle} />
      {/* <Signin /> */}
      <ISO134852016 />
      <Footer />
    </>
  );
};

export const CertificationsPage7 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarTwo toggle={toggle} />
      {/* <Signin /> */}
      <ISO310002018 />
      <Footer />
    </>
  );
};

export const CertificationsPage8 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarTwo toggle={toggle} />
      {/* <Signin /> */}
      <ISO220002018 />
      <Footer />
    </>
  );
};

export const CertificationsPage9 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarTwo toggle={toggle} />
      {/* <Signin /> */}
      <FSSC22000 />
      <Footer />
    </>
  );
};

export const CertificationsPage10 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarTwo toggle={toggle} />
      {/* <Signin /> */}
      <HACCP />
      <Footer />
    </>
  );
};
