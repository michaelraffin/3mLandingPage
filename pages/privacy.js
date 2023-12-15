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
        title="3mevents - Privacy & Policy"
        description="Welcome to 3mevents."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>3mevents -  Privacy & Policy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
        <PrivacyContent/>
      <Footer />
</div>
        )
}