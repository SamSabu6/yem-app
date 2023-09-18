import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b] ">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500 ">
            YemEats
          </h1>
          <p>
            Explore diverse cuisines, savor unique recipes, and embrace a world
            of gastronomic joy through our app. Discover the art of dining, all
            while enjoying the convenience of seamless ordering, community
            engagement, and culinary inspiration.
          </p>
          <div className="flex justify-between md:w-[75%] my-6 ">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 ">
            <div>
                <h6 className="font-medium text-[#9b9b9b] ">Locations</h6>
                <ul>
                    <li className="py-2 text-sm ">India</li>
                    <li className="py-2 text-sm ">United Arab Emirates</li>
                    <li className="py-2 text-sm ">Canada</li>
                    <li className="py-2 text-sm ">Brazil</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-[#9b9b9b] ">Locations</h6>
                <ul>
                    <li className="py-2 text-sm ">Qatar</li>
                    <li className="py-2 text-sm ">Russia</li>
                    <li className="py-2 text-sm ">United Kingdom</li>
                    <li className="py-2 text-sm ">United States of America</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-[#9b9b9b] ">Locations</h6>
                <ul>
                    <li className="py-2 text-sm ">Nepal</li>
                    <li className="py-2 text-sm ">France</li>
                    <li className="py-2 text-sm ">Germany</li>
                    <li className="py-2 text-sm ">Romania</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-[#9b9b9b] ">Locations</h6>
                <ul>
                    <li className="py-2 text-sm ">South Africa</li>
                    <li className="py-2 text-sm ">Morocco</li>
                    <li className="py-2 text-sm ">Egypt</li>
                    <li className="py-2 text-sm ">Ethiopia</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
