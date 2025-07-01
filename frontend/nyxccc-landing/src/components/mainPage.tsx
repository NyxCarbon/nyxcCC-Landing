"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Development from "./development";
import HowTo from "./how-to";
import styles from "./mainPage.module.css";
import CustomerTestimony from "./customerTestimony";
import AboutSection from "./about";
import Header from "./header";
import PartnerLogos from "./partnerlogos";
import Borrower from "./borrower";
import Team from "./team";
import Learn from "./learn";
import SellingPoint from "./sellingpoint";
import Tagline from "./tagline";  
import Footer from "./footer"
import dynamic from 'next/dynamic';

const AboutCanvas = dynamic(() => import('./AboutCanvas'), {
  ssr: false,
  loading: () => <div>Loading 3D scene...</div>
});


type MainPageProps = {
  className?: string;
};

const MainPage: NextPage<MainPageProps> = ({ className = "" }) => {

  return (
    <div className={styles.mainPage}>
      <div className={styles.pageContainer}></div>
      

      <Header />
      <Tagline />
      <AboutSection />
      <SellingPoint />
      <PartnerLogos />
      <Borrower />
      <HowTo />
      <Development />
      <Team />
      <Learn />
      <Footer />


    </div>
  );
}

export default MainPage;