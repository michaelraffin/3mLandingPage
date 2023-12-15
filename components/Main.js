import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Head from "next/head";

const axios = require('axios');
export default function Main() {

  ReactGA.initialize('UA-226511448-1');
  const [searched, setData] = useState(null);
  const [answer, Setanswer] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isHide, setShow] = useState(true);
  function askQuestion(data){
      let value =  data.nativeEvent.target.value
      if (value.length >= 5) {
          setData(value)
      }
  }
  async function recordProductStats() {
    ReactGA.ga('send', 'pageview', `Generative - ${searched}`);
   
    try {
  
      const data = {storeOwner:"SmartDeskQuestion",cType:"GenerativeAIQuestion",cName:"question","itemQuestion":searched,"date":new Date()}
      const response = await axios.put('https://different-goat-long-underwear.cyclic.cloud/items', data) 
      return  response
    } catch (error) {
    }
  }

  async function serviceCall(e){
    const apiUrl = '/api/generative' //'/api/generative'; // Replace with your API endpoint
    var requestOptions = {
      method: 'POST',
      url: apiUrl,
      headers: {
          'Authorization':'Bearer Miks',
          'Content-Type':'application/json',
      },
      data: {"question":e},
  };
    let response =  await axios(requestOptions)
    return response.data
  }

function submit(){ 
  Setanswer(null)
  setLoading(true)
  recordProductStats()
  serviceCall(searched).then(item=>{
    console.log(item)
    setLoading(false)
    Setanswer(item)
  })
}
function validateTypeButton(){
 
  setShow(!isHide)
  // submit()
}
  return (
    <section class="text-gray-600 body-font">
        <Head>
   {searched === null ?null:<title>SmartDeskPH - {searched}</title> }
   </Head>
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="lg:text-8xl text-4xl md:text-8xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
            Your Visual Solutions.
        </h1>
        <h2 class="lg:text-2xl md:text-2xl text-1xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
       {/* Your not t/ypical desk,   with our dual motor standing desk
          <br /> */}
          Convert your idea to reality.
        </h2>
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center mt-20">
          
          <a
           target="_blank"
           href="https://store.smartdeskph.com"
            className="rounded-full inline-flex items-center py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-transparent bg-blue-500 lg:px-7 md:px-7 text-md md:mt-0 hover:text-black  hover:bg-white focus:shadow-outline"
            
          >
            <div className="flex lg:text-lg text-sm font-light">
              <span className="justify-center ml-2 mr-4 lg:ml-0 lg:mr-0">View pricing</span>
            </div>
          </a>
          {/* <a
          target="_blank"
            className="rounded-full  inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent   ml-2 md:ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
            href="https://store.smartdeskph.com"
          >
            <div className="flex text-lg">
              <span className="justify-center">Purchase</span>
            </div>
          </a> */}
            <h2 class={`lg:text-lg  text-1xl mt-10 font-4 font-semibold lh-6 ld-04 pb-11 text-white text-center`}>
       Contact us
        </h2>
        </div>
        {/* <div className='w-1/2 fixed bottom-40 z-40  bg-transparent flex  items-center lg:ml-0 ml-20   justify-center '>
        <textarea 
        value={answer} class={` pr-4 pl-4  py-3 px-3 w-full text-md  ${answer != null  ? 'text-black border-white border-2  ' : 'text-white border-white border-2 '}  rounded-lg right-auto `}>
        </textarea>
        </div>
        */}
      </div>
      
      {/* <div class="fixed ml-20 flex-col bottom-20 right-auto z-40  flex items-center justify-center'">
        <textarea 
        value={answer} class={` pr-4 pl-4  py-3 px-3 w-full text-md  ${answer == null  ? 'text-black border-white border-2  hidden' : 'visible bg-white h-60  text-black border-white border-2 '} bg-transparent rounded-lg right-auto `}>
        </textarea>
        <div class="mt-2   flex items-center justify-center'">
        {isHide ? '' : <input 
        disabled={isLoading}
        onChange={(e)=>askQuestion(e)}
        class="border border-gray-600 lg:w-60 w-60 flex   pr-4 pl-4 py-3 mt-2 rounded-full text-white font-semibold hover:border-gray-700 bg-black"
        placeholder="Got a question? I'm OpenAI"/>}
        <button 
        className="rounded-full inline-flex items-center py-2 ml-2 font-xs text-white transition duration-500 ease-in-out transform bg-transparent bg-blue-500 lg:px-7 px-2  md:px-7 text-md md:mt-0 hover:text-black  hover:bg-white focus:shadow-outline"
          disabled={isLoading}
        onClick={()=>isHide ? validateTypeButton() : submit()}>{ isHide ?  'Ask Question'   :isLoading ? 'Answering...' : 'Send'}</button>
   
          </div>
       {isHide ?  <span className='text-xs text-white mt-2'>Powered by Generative AI</span>: null}  
             </div> */}
      <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          className="object-cover rounded-lg object-center w-3/4 mb-10 hover:border-white hover:border shadow-md g327"
          alt="StandingDesk #1"
          src="https://i.pinimg.com/564x/9b/98/bb/9b98bbfcf5c85bb7fdeba697ecf68094.jpg"
        ></img>
    
         <img
          className="object-cover rounded-lg object-center w-3/4 mb-10 hover:border-white hover:border shadow-md g327"
          alt="StandingDesk #3"
          src="https://i.pinimg.com/564x/07/0c/7d/070c7da0532e742a5264e41139758bf4.jpg"
        ></img>
             <img
          className="rounded-lg object-center w-3/4  mb-10 hover:border-white hover:border shadow-md g327"
          alt="StandingDesk #2"
          src="https://i.pinimg.com/564x/09/62/ee/0962ee218d8b608c81d29a8bef594679.jpg"
        ></img>
      </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center mt-20">
          
          <a
           target="_blank"
           href="https://action.smartdeskph.com"
            className="rounded-full inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white lg:px-7 md:px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"
            
          >
            <div className="flex text-lg font-light">
              <span className="justify-center ml-2 mr-4 lg:ml-0 lg:mr-0">View in action</span>
            </div>
          </a>
        </div>
      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Built with experties
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Avoid doing the same mistake.
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <img className="w-10 rounded-full" src="https://thumbs.dreamstime.com/b/relax-icon-sign-symbol-relax-icon-sign-symbol-design-149595066.jpg"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Less hassle
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
          Dealing with different suppliers just to build your dream desk is a very time-consuming process, now. You only need to settle your down payment and then wait for a couple of weeks.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10 bg-white rounded-full  object-center" src="https://cdn-icons-png.flaticon.com/512/5988/5988503.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Premium Quality
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
          With the help of our local and international suppliers, we ensure quality and standard desk design.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10 bg-white rounded-full object-center" src="http://cdn.onlinewebfonts.com/svg/img_548764.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Budget Friendly
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Don't hesitate to ask. We value every penny you spend.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10 bg-white rounded-full" src="https://static-00.iconduck.com/assets.00/emoji-sad-icon-512x512-vomssqlr.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
          Table Top
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
          We use 100% natural wood for our tabletop.
          </p>
        </div>
      </div>
      <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <img 
           class="w-10 rounded-lg bg-white "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQwv42ojOtK-wmYVHTnxefl3HvtWJzr4wNjELltVyv7GRRY4juZ-5VWMM-bKBWOAa0-c&usqp=CAU"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
              COD
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Pickup at your own peace, contact us for  COD arrangement.
          </p>
        </div>
        <div class="ktq4">
          <img 
          class="w-20 rounded-sm"
          src="https://www.bworldonline.com/wp-content/uploads/2022/05/BILLEASE-LOGO.jpg"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            BNPL
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
           Buy now and Pay later is now possible, comes with 0-5% interest.
          </p>
        </div>
      </div>
      <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">
              Tell us your preferred design.
            </h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
              Shoot us a message and one of our team will contact you straight away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autocomplete="email"
              class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-white font-semibold hover:border-gray-700 bg-black"
            />{" "}
            <a
              class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-full bg-white"
              href="mailto:sales.smartdeskph@gmailc.om?subject=Inquerty"
            >
              <span class="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
