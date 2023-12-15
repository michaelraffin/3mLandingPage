import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import AboutContent from "../components/AboutContent";

import { NextSeo } from "next-seo";
export default function Policy() {
    return (
      <div className="text-black bg-black">
        <NextSeo
        title="Home: SmartDeskPH"
        description="Welcome to SmartDeskPH."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>SmartDeskPH - About Us</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
        <AboutContent/>
      <Footer />
</div>
        )
}