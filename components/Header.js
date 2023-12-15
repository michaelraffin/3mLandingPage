import React from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header class="fixed top-0 w-full clearNav z-50">
      <div class="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a
            href="/"
            class="flex text-3xl text-white font-bold mb-4 md:mb-0"
          >  <img class="w-28 rounded-full h-auto"src="https://localflowershop.sgp1.digitaloceanspaces.com/product/1667119587371-white-smart-desk.jpg"/>
          </a>
        
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div class="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
          
          <a
            href="/"
            class="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
          >Home
          </a> 
          <a
            href="https://store.smartdeskph.com/"
            class="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
          >Store
          </a> 
           
          <a
            href="https://action.smartdeskph.com/"
            class="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
          >Desk
          </a> 
           
          </div>
          <a
            href="https://web.facebook.com/AutonomousDesk?_rdc=1&_rdr"
            rel="noopener noreferrer"
            target="_blank"
            className="invisible md:visible bg-white rounded-full border border-white"
          > 
            <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
          </a>
         
        </div>
      </div>
    </header>
  );
}
