import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import CoverForm from "./_components/CoverForm";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CoverForm/>
    </>
  );
}
