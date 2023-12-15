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
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  return (
    <div className="text-black bg-black">
      <NextSeo
      additionalMetaTags={{
        name: "Automatic Standing Desk;",
        property: "Automatic Standing Desk"

      }}
        facebook={{appId:"100632342493724"}}
        title="3m - Visual Solutions"
        description="SmartDeskPH is a premium quality automatic standing desk that comes with a solid wood table top and dual silent motors for smooth and quiet operation. With its sleek and modern design, this standing desk allows you to easily switch between sitting and standing positions throughout the workday, promoting a healthier and more productive work experience. Its sturdy construction and advanced features make it an ideal choice for any home or office setting"
        canonical="https://www.smartdeskph.com/"
        siteName = "SmartDeskPh"
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
        <title>3m - Visual Solution</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      
      {/* <FAQ/> */}
      <Footer />
      <div className=' w-full h-20 bg-blue-500'>
  <div className=' w-full h-20 bg-black rounded-br-full rounded-bl-full '/>
  </div> 
    </div>
  );
}
