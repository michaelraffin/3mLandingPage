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
        title="3MVisual - About"
        description="Welcome to 3MVisual Elevate your events with our versatile venue space, perfect for corporate meetings, conferences, trade shows, expos, networking events, product launches, team-building activities, workshops, training sessions, gala dinners"
        canonical="https://www.3mvisual.com"
        openGraph={{
          url: "https://www.3mvisual.com",
        }}
      />
      <Head>
        <title>3MVisual - About Us</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
        <AboutContent/>
      <Footer />
</div>
        )
}