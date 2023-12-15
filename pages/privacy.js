import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import PrivacyContent from "../components/PrivacyContent";

import { NextSeo } from "next-seo";
export default function Policy() {
    return (
      <div className="text-black bg-black">
        <NextSeo
        title="SmartDeskPH - Privacy & Policy"
        description="Welcome to SmartDeskPH."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>SmartDeskPH -  Privacy & Policy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
        <PrivacyContent/>
      <Footer />
</div>
        )
}