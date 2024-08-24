import { useEffect, useState } from "react";
import ReactGA from "react-ga";
import Head from "next/head";

const axios = require("axios");
export default function Main() {
  ReactGA.initialize("UA-226511448-1");
  const [searched, setData] = useState(null);
  const [answer, Setanswer] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isHide, setShow] = useState(true);
  function askQuestion(data) {
    let value = data.nativeEvent.target.value;
    if (value.length >= 5) {
      setData(value);
    }
  }
  async function recordProductStats() {
    ReactGA.ga("send", "pageview", `Generative - ${searched}`);

    try {
      const data = {
        storeOwner: "3meventsQuestion",
        cType: "GenerativeAIQuestion",
        cName: "question",
        itemQuestion: searched,
        date: new Date(),
      };
      const response = await axios.put(
        "https://different-goat-long-underwear.cyclic.cloud/items",
        data,
      );
      return response;
    } catch (error) {}
  }

  async function serviceCall(e) {
    const apiUrl = "/api/generative"; //'/api/generative'; // Replace with your API endpoint
    var requestOptions = {
      method: "POST",
      url: apiUrl,
      headers: {
        Authorization: "Bearer Miks",
        "Content-Type": "application/json",
      },
      data: { question: e },
    };
    let response = await axios(requestOptions);
    return response.data;
  }

  function submit() {
    Setanswer(null);
    setLoading(true);
    recordProductStats();
    serviceCall(searched).then((item) => {
      console.log(item);
      setLoading(false);
      Setanswer(item);
    });
  }
  function validateTypeButton() {
    setShow(!isHide);
    // submit()
  }
  return (
    <section class="body-font text-gray-600">
      <Head>
        {searched === null ? null : <title>3meventsPH - {searched}</title>}
      </Head>
      <div class="mx-auto max-w-5xl pb-24 pt-52">
        <h1 class="font-4 lh-6 ld-04 mb-6 text-center text-4xl font-bold text-white md:text-8xl lg:text-8xl">
          Your LED Wall Visual Solution.
        </h1>
        <h2 class="text-1xl font-4 lh-6 ld-04 pb-11 text-center font-semibold text-gray-700 md:text-2xl lg:text-2xl">
          {/* Your not t/ypical desk,   with our dual motor standing desk
          <br /> */}
          Convert your idea to reality.
        </h2>
        <div class="mx-auto mt-20 max-w-6xl px-4 text-center sm:px-6">
          <a
            target="_blank"
            href="https://booking.3mvisual.com/"
            className="text-md focus:shadow-outline inline-flex transform items-center rounded-full bg-blue-500 bg-transparent py-2 font-semibold text-white transition duration-500 ease-in-out hover:bg-white hover:text-black md:mt-0  md:px-7 lg:px-7"
          >
            <div className="flex text-sm font-light lg:text-lg">
              <span className="ml-2 mr-4 justify-center text-xs lg:ml-0 lg:mr-0">
                Explore costs
              </span>
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
          <h2
            class={`font-4   lh-6 ld-04 mt-10 pb-11 text-center text-xs font-semibold text-white`}
          >
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

      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-20 w-3/4 ">
          <a href="javascript:void(0)" class="group relative block bg-black">
            <img
              alt="Developer"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1706083108909-IMG_8926.jpg"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <img
              class="ml-20 mt-10 hidden h-24 w-24 rounded-lg lg:block"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png"
            />
            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Governments
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                DICT - Regional
              </p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="w-full text-sm text-white">
                    The event served as a crucial juncture for Iliganons to
                    explore and enhance their proficiency in various information
                    and communication technology (ICT) domains. Attendees delved
                    into comprehensive discussions and hands-on activities,
                    fostering a collaborative learning environment that
                    emphasized the importance of adapting to the rapidly
                    evolving digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mb-20 w-3/4 ">
          <a href="javascript:void(0)" class="group relative block bg-black">
            <img
              alt="Developer"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1709973042451-431488606_443979747970259_7248823462484088975_n-2.jpg"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <img
              class="ml-20 mt-10 hidden h-24 w-24 rounded-lg lg:block"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png"
            />
            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                GOVERNMENTS{" "}
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">GAD</p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="w-full text-sm text-white">
                    Illuminating International Women's Day with our mesmerizing
                    LED WALL lights & empowering sounds! Elevate the
                    celebration, champion gender equality, and ignite
                    conversations on women's rights. Let's shine a light on
                    progress and amplify the voices of change together
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="mb-20 w-3/4 ">
          <a href="javascript:void(0)" class="group relative block bg-black">
            <img
              alt="Developer"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1724429807543-456330700_430023056850542_3154889259620322067_n.jpg"
              // src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1706083697450-Screenshot%202024-01-24%20at%204.08.08%20PM.png"
              class="absolute inset-0 h-full w-full object-cover mb-20 opacity-75 transition-opacity group-hover:opacity-50"
            />
            <img
              class="ml-20 mt-10 hidden h-24 w-24 rounded-lg lg:block"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png"
            />
            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                DICT
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">CONFERENCE</p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="w-full text-sm text-white">
                    DICT Region 10 HackForGov 2023 Regional Qualifying Round, a
                    cybersecurity competition specifically designed for college
                    and university students in Northern Mindanao, Philippines.
                    Hosted by the Department of Information and Communications
                    Technology (DICT) Region 10, this event challenges students
                    to participate in a Capture the Flag (CTF) competition.
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
        <div className="mb-20 w-3/4  lg:mt-40  mt-2 ">
          <a href="javascript:void(0)" class="group relative block bg-black">
            <img
              alt="Developer"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1706062199092-SCHOOL.png"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <img
              class="ml-20 mt-10 hidden h-24 w-24 rounded-lg lg:block"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png"
            />
            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Educational Events{" "}
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                VISUAL LEARNING AIDS
              </p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="w-full text-sm text-white">
                    LED walls can serve as effective visual learning aids in
                    classrooms. Teachers can use them to display educational
                    content, multimedia presentations, and interactive
                    materials, creating a more immersive and interactive
                    learning environment{" "}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div lassName="w-3/4 mb-20 ">
          <a href="javascript:void(0)" class="group relative block bg-black">
            <img
              alt="Mayors Night"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1718186360057-mayors-night.png"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <img
              class="ml-20 mt-10 hidden h-24 w-24 rounded-lg lg:block"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png"
            />
            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Themed Events
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                LIFE CELEBRATION
              </p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="w-full text-sm text-white">
                    Weddings, anniversaries, and other personal celebrations can
                    benefit from LED walls by displaying personalized content,
                    such as photo montages, videos, and messages. This adds a
                    personal touch to the event and helps create lasting
                    memories{" "}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mb-20 w-3/4 ">
          <a href="javascript:void(0)" class="group relative block bg-black">
            <img
              alt="Milestone"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1718186054529-3m-hs-grad-event.png"
              class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <img
              class="ml-20 mt-10 hidden h-24 w-24 rounded-lg lg:block"
              src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1702655031335-webLogo.png"
            />
            <div class="relative p-4 sm:p-6 lg:p-8">
              <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                Your Milestone
              </p>

              <p class="text-xl font-bold text-white sm:text-2xl">
                ACHIEVEMENTS
              </p>

              <div class="mt-32 sm:mt-48 lg:mt-64">
                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p class="w-full text-sm text-white">
                    LED walls can be used to display live footage, highlight
                    achievements, and showcase memorable moments during
                    graduation ceremonies. This adds a modern and visually
                    appealing element to the event, making it more memorable for
                    students and their families{" "}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="mx-auto mt-20 max-w-6xl px-4 text-center sm:px-6">
        <a
          target="_blank"
          href="https://booking.3mvisual.com/"
          className="text-md focus:shadow-outline inline-flex transform items-center rounded-full bg-transparent bg-white py-3 font-semibold text-black transition duration-500 ease-in-out hover:bg-white hover:text-black md:mt-0 md:px-7 lg:px-7"
        >
          <div className="flex text-lg font-light">
            <span className="ml-2 mr-4 justify-center text-xs lg:ml-0 lg:mr-0">
              View our availability
            </span>
          </div>
        </a>
      </div>
      <h2 className="mb-1 pt-40 text-center text-2xl font-semibold tracking-tighter text-gray-200 md:text-6xl lg:text-7xl">
        Built with experties
      </h2>
      <br></br>
      <p className="fs521 mx-auto text-center text-xl font-normal leading-relaxed text-gray-300 lg:w-2/3">
        Avoid doing the same mistake.
      </p>
      <div className="fsac4 mx-auto max-w-4xl px-3 pb-24 pt-12 md:px-1">
        <div class="ktq4">
          <img
            className="w-10 rounded-full"
            src="https://thumbs.dreamstime.com/b/relax-icon-sign-symbol-relax-icon-sign-symbol-design-149595066.jpg"
          ></img>
          <h3 class="pt-3 text-lg font-semibold text-white">
            Streamlined Convenience
          </h3>
          <p class="value-text text-md fkrr1 pt-2 text-gray-200">
            Say goodbye to the tedious process of dealing with multiple
            suppliers to bring your dream LED wall to life. Now, with our
            service, all it takes is a simple down payment, and you can sit back
            while we turn your vision into reality within a few short weeks.
          </p>
        </div>
        <div class="ktq4">
          <img
            className="w-10 rounded-full bg-white  object-center"
            src="https://cdn-icons-png.flaticon.com/512/5988/5988503.png"
          ></img>
          <h3 class="pt-3 text-lg font-semibold text-white">Premium Quality</h3>
          <p class="value-text text-md fkrr1 pt-2 text-gray-200">
            With collaboration from our network of local and international
            suppliers, we guarantee the delivery of high-quality and standard
            LED wall setups for your events.
          </p>
        </div>
        <div class="ktq4">
          <img
            className="w-10 rounded-full bg-white object-center"
            src="http://cdn.onlinewebfonts.com/svg/img_548764.png"
          ></img>
          <h3 class="pt-3 text-lg font-semibold text-white">Budget Friendly</h3>
          <p class="value-text text-md fkrr1 pt-2 text-gray-200">
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
      <div className="fsac4 mx-auto max-w-6xl px-3 pb-32 pt-32 md:px-1">
        <div class="ktq4">
          <img
            class="w-10 rounded-lg bg-white "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQwv42ojOtK-wmYVHTnxefl3HvtWJzr4wNjELltVyv7GRRY4juZ-5VWMM-bKBWOAa0-c&usqp=CAU"
          ></img>
          <h3 class="pt-3 text-lg font-semibold text-white">Credit Card</h3>
          <p class="value-text text-md fkrr1 pt-2 text-gray-200">
            Choose us for your LED wall needs, and now enjoy the ease of Credit
            Card payments.
          </p>
        </div>
        <div class="ktq4">
          <img
            class="w-20 rounded-lg rounded-sm bg-white"
            src="https://blog.travelkhana.com/tkblog/wp-content/uploads/sites/2/2017/09/UK.png"
          ></img>
          <h3 class="pt-3 text-lg font-semibold text-white">BNPL</h3>
          <p class="value-text text-md fkrr1 pt-2 text-gray-200">
            Book now and Pay later is now possible, comes with 0-5% interest.
          </p>
        </div>
      </div>
      <section class="relative pb-24">
        <div class="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">
              Tell us your preferred design.
            </h1>
            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
              Shoot us a message and one of our team will contact you straight
              away.
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autocomplete="email"
              class="mt-2 w-1/4 rounded-md border border-gray-600 bg-black py-3 pl-2 pr-2 font-semibold text-white hover:border-gray-700"
            />{" "}
            <a
              class="ml-2 mt-2 inline-flex transform items-center rounded-full border bg-transparent bg-white px-14 py-3 font-medium text-black transition duration-500 ease-in-out"
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
