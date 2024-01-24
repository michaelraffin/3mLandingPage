import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {

  return <>
  <Head>
<meta name="robots" content="nofollow"/>
<meta name="googlebot" content="noindex"/>
  <meta name="keywords" content="SmartDeskPh, Standing Desk in Ph ,Autonomous,
      Smart Desk,
      Standing Desk,
      Dual Motor,
      Sit-stand desk,
      Dual motor desk,
      Solid wood desk,
      Adjustable height desk,
      Ergonomic desk,
      Office furniture,
      Health and wellness,
      Home office,
      Automatic Standing Desk,
      Computer Desk,
      Computer Gaming Desk,
      Computer Desk"/>
    </Head>
    <Script 
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-5VVC6QK17C"/>
  <Script 
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=UA-226511448-1"/>


{/* <Script id="google-analytics">
 {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5VVC6QK17C');
 `}
</Script> */}

<Script >
{` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "kqw0qreuki");
    `}
</Script>


<Script id="google-analytics">
 {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-20WMGZ88PT');
 `}
</Script>


{/* <Script >
 {`(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "g7yfoivuno");
 `}
</Script> */}




<Script >
{`window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v12.0'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));`}
  </Script>
  <Component {...pageProps} />;
  </>
}

export default MyApp;
