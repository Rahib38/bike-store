import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/*    <!-- Component: Five Columns Footer with Logo and Sub Footer --> */}
      <footer className="text-slate-500">
        {/* <!-- Main footer --> */}
        <div className="pt-16 pb-12 text-sm border-t border-slate-200 bg-slate-100">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div
                className=" col-span-4 md:col-span-8 lg:col-span-4"
                aria-labelledby="footer-header"
              >
                <a
                  id="WindUI"
                  aria-label="WindUI logo"
                  aria-current="page"
                  className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 lg:ml-5"
                  href="javascript:void(0)"
                >
                  <Link to={"/"} className="flex flex-row items-center gap-2">
                    <div>
                      <a className="relative inline-flex items-center justify-center w-20 h-20  text-lg text-white  lg:-ml-6 rounded-full ">
                        <img
                          src="https://svgsilh.com/svg_v2/158940.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <span className="lg:text-3xl font-semibold">RideOn</span>{" "}
                      <span className="lg:text-3xl font-semibold">Wheels</span>
                    </div>
                  </Link>
                </a>
                <p>
                  At RideOn Wheels, our mission is to inspire and empower
                  individuals through the joy of bikeing.
                </p>
              </div>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-product-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-5-logo"
                >
                  Product
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Features{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Customers{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Why us?{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Pricing{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-docs-5-logo"
                >
                  Docs & Help
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Documentation
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Training{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      System status{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      FAQ's{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Help Center{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-about-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-about-5-logo"
                >
                  About us
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      About us{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Careers{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Leadership{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Blog
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Events{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-get-in-touch-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-get-in-touch-5-logo"
                >
                  Get in touch
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Support{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Partners{" "}
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      {" "}
                      Join research{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* <!-- Sub Footer --> */}
        <div className="py-4 text-sm border-t border-slate-200 bg-slate-100">
          <div className="container px-6 mx-auto">
            <div className="grid items-center grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-2 md:col-span-4 lg:col-span-6">
                Copyright {currentYear} Brand
              </div>
              <nav
                className="col-span-3 md:col-span-4 lg:col-span-6"
                aria-labelledby="subfooter-links-3-sub"
              >
                <h3 className="sr-only" id="subfooter-links-3-sub">
                  Get in touch
                </h3>
                <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                  <li className="leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      T&C
                    </a>
                  </li>
                  <li className="leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Cookies
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Five Columns Footer with Logo and Sub Footer --> */}
    </>
  );
}
