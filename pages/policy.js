import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PolicyContent from "../components/PolicyContent";
import FAQ from "../components/FAQ";

import { NextSeo } from "next-seo";
export default function Policy() {
    return (
      <div className="text-black bg-black">
        <NextSeo
        title="SmartDeskPH - Refund and Return Policy"
        description="Welcome to SmartDeskPH."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>SmartDeskPH - Refund and Return Policy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
        <PolicyContent/>
      <Footer />
</div>
        )
}