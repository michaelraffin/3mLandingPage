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
  function askQuestion(data) {
    let value = data.nativeEvent.target.value
    if (value.length >= 5) {
      setData(value)
    }
  }
  async function recordProductStats() {
    ReactGA.ga('send', 'pageview', `Generative - ${searched}`);

    try {

      const data = { storeOwner: "3meventsQuestion", cType: "GenerativeAIQuestion", cName: "question", "itemQuestion": searched, "date": new Date() }
      const response = await axios.put('https://different-goat-long-underwear.cyclic.cloud/items', data)
      return response
    } catch (error) {
    }
  }

  async function serviceCall(e) {
    const apiUrl = '/api/generative' //'/api/generative'; // Replace with your API endpoint
    var requestOptions = {
      method: 'POST',
      url: apiUrl,
      headers: {
        'Authorization': 'Bearer Miks',
        'Content-Type': 'application/json',
      },
      data: { "question": e },
    };
    let response = await axios(requestOptions)
    return response.data
  }

  function submit() {
    Setanswer(null)
    setLoading(true)
    recordProductStats()
    serviceCall(searched).then(item => {
      console.log(item)
      setLoading(false)
      Setanswer(item)
    })
  }
  function validateTypeButton() {

    setShow(!isHide)
    // submit()
  }
  return (
    <section class="text-gray-600 body-font">
      <Head>
        {searched === null ? null : <title>3meventsPH - {searched}</title>}
      </Head>
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="lg:text-8xl text-4xl md:text-8xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          Your LED Wall Visual Solution.
        </h1>
        <h2 class="lg:text-2xl md:text-2xl text-1xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          {/* Your not t/ypical desk,   with our dual motor standing desk
          <br /> */}
          Convert your idea to reality.
        </h2>
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center mt-20">

          <a
            target="_blank"
            href="https://booking.3mvisual.com/"
            className="rounded-full inline-flex items-center py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-transparent bg-blue-500 lg:px-7 md:px-7 text-md md:mt-0 hover:text-black  hover:bg-white focus:shadow-outline"

          >
            <div className="flex lg:text-lg text-sm font-light">
              <span className="justify-center ml-2 mr-4 lg:ml-0 lg:mr-0">View pricing</span>
            </div>
          </a>
          {/* <a
          target="_blank"
            className="rounded-full  inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent   ml-2 md:ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
            href="https://store.3meventsph.com"
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
        <div className='w-3/4 mb-20 '>

          <a href="#" class="group relative block bg-black">
            <img
              alt="Developer"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1706083108909-IMG_8926.jpg"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <img class="w-24 mt-10 rounded-lg ml-64 h-24" src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png" />
            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Goverments</p>

              <p class="text-xl font-bold text-white sm:text-2xl">DICT</p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div
                  class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p class="text-sm text-white w-full">
                    The event served as a crucial juncture for Iliganons to explore and enhance their proficiency in various information and communication technology (ICT) domains. Attendees delved into comprehensive discussions and hands-on activities, fostering a collaborative learning environment that emphasized the importance of adapting to the rapidly evolving digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </a>

        </div>
        <div className='w-3/4 mb-20 '>

          <a href="#" class="group relative block bg-black">
            <img
              alt="Developer"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1706083697450-Screenshot%202024-01-24%20at%204.08.08%20PM.png"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <img class="w-24 mt-10 rounded-lg ml-64 h-24" src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png" />
            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Private</p>

              <p class="text-xl font-bold text-white sm:text-2xl">TALK</p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div
                  class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p class="text-sm text-white w-full">
                    Establish partnerships with event planning companies or organizations that organize.
                    Talks are indeed presentations that cover a wide range of topics, including technology, entertainment, and design, as well as science, business, and various global issues. These talks are usually delivered by experts, thought leaders, and innovators in their respective fields.
                  </p>
                </div>
              </div>
            </div>
          </a>

        </div>

        {/* <img
          className="object-cover rounded-lg object-center w-3/4 mb-10 hover:border-white hover:border shadow-md g327"
          alt="StandingDesk #1"
          src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1706083697450-Screenshot%202024-01-24%20at%204.08.08%20PM.png"
        ></img> */}
 <div className='w-3/4 mb-20 '>

<a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1706062199092-SCHOOL.png"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />
  <img class="w-24 mt-10 rounded-lg ml-64 h-24" src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png" />
  <div class="relative p-4 sm:p-6 lg:p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Educational Events </p>

    <p class="text-xl font-bold text-white sm:text-2xl">VISUAL LEARNING AIDS</p>

    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white w-full">
        LED walls can serve as effective visual learning aids in classrooms. Teachers can use them to display educational content, multimedia presentations, and interactive materials, creating a more immersive and interactive learning environment     </p>
      </div>
    </div>
  </div>
</a>

</div>
       

 <div className='w-3/4 mb-20 '>

<a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1706062285130-BIG.png"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />
  <img class="w-24 mt-10 rounded-lg ml-64 h-24" src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png" />
  <div class="relative p-4 sm:p-6 lg:p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Themed Events</p>

    <p class="text-xl font-bold text-white sm:text-2xl">LIFE CELEBRATION</p>

    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white w-full">
        Weddings, anniversaries, and other personal celebrations can benefit from LED walls by displaying personalized content, such as photo montages, videos, and messages. This adds a personal touch to the event and helps create lasting memories  </p>
      </div>
    </div>
  </div>
</a>

</div>


<div className='w-3/4 mb-20 '>

<a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1706062391532-MID.png"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />
  <img class="w-24 mt-10 rounded-lg ml-64 h-24" src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png" />
  <div class="relative p-4 sm:p-6 lg:p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">Your Milestone</p>

    <p class="text-xl font-bold text-white sm:text-2xl">ACHIEVEMENTS</p>

    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white w-full">
        LED walls can be used to display live footage, highlight achievements, and showcase memorable moments during graduation ceremonies. This adds a modern and visually appealing element to the event, making it more memorable for students and their families </p>
      </div>
    </div>
  </div>
</a>

</div>
        
        
      </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center mt-20">

        <a
          target="_blank"
          href="https://booking.3mvisual.com/"
          className="rounded-full inline-flex items-center py-3 font-semibold text-black transition duration-500 ease-in-out transform bg-transparent bg-white lg:px-7 md:px-7 text-md md:mt-0 hover:text-black hover:bg-white focus:shadow-outline"

        >
          <div className="flex text-lg font-light">
            <span className="justify-center ml-2 mr-4 lg:ml-0 lg:mr-0 text-xs">View in availability</span>
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
            Streamlined Convenience
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Say goodbye to the tedious process of dealing with multiple suppliers to bring your dream LED wall to life. Now, with our service, all it takes is a simple down payment, and you can sit back while we turn your vision into reality within a few short weeks.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10 bg-white rounded-full  object-center" src="https://cdn-icons-png.flaticon.com/512/5988/5988503.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Premium Quality
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            With collaboration from our network of local and international suppliers, we guarantee the delivery of high-quality and standard LED wall setups for your events.
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
        {/* <div class="ktq4">
          <img className="w-10 bg-white rounded-full" src="https://static-00.iconduck.com/assets.00/emoji-sad-icon-512x512-vomssqlr.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
          Table Top
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
          We use 100% natural wood for our tabletop.
          </p>
        </div> */}
      </div>
      <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <img
            class="w-10 rounded-lg bg-white "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQwv42ojOtK-wmYVHTnxefl3HvtWJzr4wNjELltVyv7GRRY4juZ-5VWMM-bKBWOAa0-c&usqp=CAU"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            Credit Card
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Choose us for your LED wall needs, and now enjoy the ease of Credit Card payments.
          </p>
        </div>
        <div class="ktq4">
          <img
            class="w-20 rounded-sm bg-white rounded-lg"
            src="https://blog.travelkhana.com/tkblog/wp-content/uploads/sites/2/2017/09/UK.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">
            BNPL
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Book now and Pay later is now possible, comes with 0-5% interest.
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
              href="mailto:sales.3meventsph@gmailc.om?subject=Inquerty"
            >
              <span class="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
