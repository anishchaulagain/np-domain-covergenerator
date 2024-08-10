import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import CoverForm from "./_components/CoverForm";
import Faq from "./_components/Faq";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Intro from "./_components/Intro";
import Steps from "./_components/Steps";
import Review from "./_components/Review";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Intro/>
    <Steps/>
    <Faq/>
    <Review/>
    <Footer/>
    </>
  );
}
