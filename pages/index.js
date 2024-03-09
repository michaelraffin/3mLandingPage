import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { NextSeo } from "next-seo";
// import Script from "next/script";
export default function Home() {
  React.useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <div className="bg-black text-black">
      <NextSeo
        additionalMetaTags={{
          name: "Video Production service;",
          property: "LED wall Rental, Audio and Visual prensetation. ",
        }}
        facebook={{ appId: "100632342493724" }}
        title="3MVisual - Welcome"
        description="At 3MVisual Elevate your events with our versatile venue space, perfect for corporate meetings, conferences, trade shows, expos, networking events, product launches, team-building activities, workshops, training sessions, gala dinners "
        canonical="https://www.3mvisual.com"
        siteName="3MVisual"
        //   openGraph={{
        //     type: 'article',
        //     article: {
        //       content:'SmartDeskPH is a premium quality automatic standing desk that comes with a solid wood table top and dual silent motors for smooth and quiet operation. With its sleek and modern design, this standing desk allows you to easily switch between sitting and standing positions throughout the workday, promoting a healthier and more productive work experience. Its sturdy construction and advanced features make it an ideal choice for any home or office setting',
        //         authors: [
        //             'https://www.linkedin.com/in/michael-raffin-paculba-580761b8/'

        //         ],
        //         tags: ['Autonomous', 'Smart Desk', 'Standing Desk','Automatic Standing Desk','Computer Desk','Computer Gaming Desk','Computer Desk','SmartDeskPh','SmartDesk Ph'],
        //     },
        //     url: "https://blog.smartdeskph.com/posts/finger-joint-table-by-smartdeskph",
        //     images: {
        //         url: 'https://localflowershop.sgp1.digitaloceanspaces.com/product/1667119587371-white-smart-desk.jpg',
        //         width: 850,
        //         height: 650,
        //         alt: 'SmartDeskPh Photo ',
        //     },
        //     site_name: 'https://www.smartdeskph.com'
        // }}
      />
      <Head>
        <title>3MVisual Solution</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />

      {/* <FAQ/> */}
      <Footer />
      <div className=" h-20 w-full bg-blue-500">
        <div className=" h-20 w-full rounded-bl-full rounded-br-full bg-black " />
      </div>
    </div>
  );
}
