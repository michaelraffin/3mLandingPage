export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">SmartDesk</h2>
            <ul className="space-y-4 text-md">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              {/* <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Contact Us
                </a>
              </li>{" "} */}
            
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="https://blog.smartdeskph.com"
                >
                  Stories
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">E-Store</h2>
            <ul className="space-y-4">
            <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="https://store.smartdeskph.com/"
                >
                    Main Store 
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="https://www.lazada.com.ph/products/i3286986923.html?spm=a1zawj.24863640.table_online_product.1.3c794edfskE0y1"
                >
                  Lazada
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                Shopee
                </a>
              </li>
              
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Products</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Standing Desk
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Table Tops
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Monitor Riser
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Cable Management
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Connect</h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="https://www.linkedin.com/company/smartdeskph/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="https://web.facebook.com/AutonomousDesk?_rdc=1&_rdr"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors duration-200 font-semibold text-xl"
                  href="https://www.instagram.com/smartdesk.ph/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/terms"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            {/* <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </a>
            </li> */}
            <li>
              <a
                href="/policy"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Refund Policy
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="/"
              className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2020 SmartDeskPh
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
