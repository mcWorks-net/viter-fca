import React from "react";
import logo from "/images/fca-logo.webp";
import Btn from "./Btn";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-10 bg-[#f2f2f2]">
        <div className="container">
          <div className="footerWrapper lg:flex items-start justify-between border-b-2 border-b-[#6b7280] pb-5">
            <a href="https://fca.edu.ph/">
              <img
                src={logo}
                alt=""
                className="w-[200px] py-2 object-contain m-auto lg:m-0"
              />
            </a>
            <div className="footerLinks  gap-10 hidden lg:flex">
              <ul>
                <li className="font-semibold">Admission</li>
                <li>
                  <a href="https://fca.edu.ph/admission/?1=">Playschool</a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/admission/?2=">Pre-Elementary</a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/admission/?3=">Elementary</a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/admission/?4=">Junior High</a>
                </li>
              </ul>
              <ul>
                <li className="font-semibold">Other Offers</li>
                <li>
                  <a href="https://fca.edu.ph/services/?#219">
                    Tutorial Services
                  </a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/services/?#arts">Arts</a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/services/?#music-lessons">
                    Music Lessons
                  </a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/services/?#sports">Sports</a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/services/?#transportation">
                    Transportation
                  </a>
                </li>
              </ul>
              <ul>
                <li className="font-semibold">Quicklinks</li>
                <li>
                  <a href="https://fca.edu.ph/">Home</a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/about/">About</a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/admission/">Admission</a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/services/">Services</a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/gallery/">Gallery</a>
                </li>
                <li>
                  <a href="https://fca.edu.ph/contact/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footerBtn">
              <Btn
                link={"https://fca.edu.ph/donate/"}
                customClass={
                  "w-[200px] m-auto lg:my-2 block bg-[#28941e] text-white text-center rounded-md py-2 my-2 hover:bg-[#daa625]"
                }
                text={"Give"}
              />
              <Btn
                link={"https://fca.edu.ph/faq"}
                customClass={
                  "w-[200px] m-auto lg:my-2 block border border-[#28941e] text-center rounded-md py-2 my-2 hover:bg-[#daa625] hover:text-white"
                }
                text={"FAQ's"}
              />
            </div>
          </div>
          <div className="footerCopyright block text-center lg:flex items-center justify-between pt-5">
            <div className="flex justify-center items-center gap-4 order-1 lg:order-2">
              <p>
                <small>Follow us:</small>
              </p>

              <a href="https://www.facebook.com/frontlinechristianacademy">
                <BsFacebook className="text-3xl text-[#6b7280]" />
              </a>
            </div>
            <p className="order-2 lg:order-1">
              <small>&copy; Frontline Christian Academy 2023</small>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
