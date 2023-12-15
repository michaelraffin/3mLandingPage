import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PolicyContent from "../components/PolicyContent";
import TermsContent from "../components/TermsService";

import { NextSeo } from "next-seo";
export default function Policy() {
    return (
      <div className="text-black bg-black">
        <NextSeo
        title="SmartDeskPH - Terms and Conditions"
        description="Welcome to SmartDeskPH."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>SmartDeskPH - Terms and Conditions</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
        <TermsContent/>
      <Footer />
</div>
        )
}