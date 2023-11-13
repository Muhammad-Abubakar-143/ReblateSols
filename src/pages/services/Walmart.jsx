import React from "react";
import { Walmart1, Walmart2 } from "../../assets";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import { technologies } from "../../constants/tech";

const Walmart = () => {
  return (
    <>
      <div className="mb-4 text-center pt-[130px]">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          Walmart
        </h1>
      </div>
      <div className="px-9 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-[100%] flex items-start justify-start">
          <img
            src={Walmart2}
            alt="Walmart"
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
        <div className="text-black">
          <p>
            Before you can sell on Walmart Marketplace, you must first grasp the
            platform. You, like other eCommerce sites, require smart methods to
            improve your product listings and brand pages.
            <br />
            Our forward-thinking digital marketing business, Reblate, has honed
            our eCommerce expertise to give one-of-a-kind Walmart Marketplace
            optimization solutions. Our eCommerce solution offering is intended
            to push your online company growth and assist you in reaching your
            full digital potential. The Walmart Marketplace has evolved into a
            significant revenue-generating eCommerce platform.
            <br />
            Allow our Walmart Marketplace marketing team to capitalize on your
            digital footprint and assist you in selling on Walmart Marketplace.
            We guarantee that your Walmart business is well-positioned in front
            of your targeted customers through content audits, eCommerce SEO,
            and catalog optimization.
          </p>

          <h1 className="text-[12px] md:text-[20px] font-bold tracking-wide">
            What services does walmart provide
          </h1>
          <p>
            Walmart Grocery Pickup and Delivery are important services that
            ensure consumer accessibility. Subscriptions such as Walmart+ and
            Delivery limitless provide limitless free delivery and member-only
            discounts. Express Delivery provides same-day delivery on a wide
            variety of products. Walmart MoneyCenters and Walmart Health
            additionally provide in-store pharmacy, financial services, and
            healthcare services. Walmart's e-commerce support services, notably
            Walmart Fulfillment Services, strengthen the company's position as a
            one-stop shopping destination.
          </p>
        </div>
      </div>
      <div className="mb-8  pt-3 max-w-7xl mx-auto w-full">
        <h1 className=" font-black md:text-[60px] pl-24 sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          What we Offer
        </h1>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-2 text-secondary pl-24 max-w-7xl mx-auto mt-4">
          <div className="text-start w-[90%]">
            <h1 className="text-[25px] text-[#14213d]">Walmart WFS</h1>
            <ul className="text-normal">
              <li>Applying to WFS</li>
              <li>New Listings in WFS</li>
              <li>Convert Existing Listing to WFS</li>
              <li>Walmart seller central management</li>
              <li>Complete Solution of a Walmart Seller Center</li>
              <li>Maintain account health 100%</li>
              <li>Complete understanding of Walmart algorithm</li>
            </ul>
          </div>
          <div className="text-start w-[90%]">
            <h1 className="text-[25px] text-[#14213d]">
              Walmart Private Label
            </h1>
            <ul className="text-normal">
              <li>Walmart Private Label</li>
              <li>Walmart WFS Private Label</li>
              <li>Winning Product Research</li>
              <li>WFS Listing Optimization</li>
              <li>Authentic Supplier Hunting</li>
              <li>Order Placement</li>
              <li>Inbound Order Creation</li>
            </ul>
          </div>
          <div className="text-start w-[90%]">
            <h1 className="text-[25px] text-[#14213d]">
              Walmart online Arbitrage
            </h1>
            <ul className="text-normal">
              <li>Walmart Online Arbitrage winning product research</li>
              <li>Walmart Online Arbitrage listing</li>
              <li>Walmart Online Arbitrage listing optimization</li>
              <li>Walmart ppc optimization</li>
              <li>Creating walmart OA shipments</li>
              <li>Removing errors and case creation</li>
              <li>Google Sheets to track your progress Walmart OA account</li>
            </ul>
          </div>
          <div className="text-start w-[90%]">
            <h1 className="text-[25px] text-[#14213d]">
              Walmart Virtual Assistant Services
            </h1>
            <ul className="text-normal">
              <li>Market Research</li>
              <li>Product Hunting</li>
              <li>Product Sourcing</li>
              <li>Finging Supplier</li>
              <li>PPC Advertisement</li>
              <li>Inventory Management</li>
              <li>Optimization</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-9 pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-black">
          <p className="text-normal text-secondary">
            As a Walmart Marketplace seller, you must enhance your Walmart
            Marketplace marketing strategy. This is why many Walmart businesses
            fail. Reblate has an in-house eCommerce marketing team that can
            assist you with your Walmart Marketplace sales.
            <br />
            Our Walmart Marketplace optimization campaigns are designed to boost
            your brand presence and provide maximum ROI for your business.
            <br />
            Product placement, pricing strategies, content optimization and
            marketing campaigns are some of the key factors to consider as a
            Walmart Marketplace seller. With our extensive experience and
            knowledge in digital marketing, we will create the best online
            campaigns to suit your unique business offering.
            <br />
            We implement lucrative marketing strategies, including Walmart SEO
            and eCommerce PPC campaigns to increase your visibility and
            credibility. Our team streamlines the process so you can rest easy
            and focus on your business.
          </p>
        </div>
        <div className="w-[80%] flex items-start justify-end">
          <img
            src={Walmart1}
            alt="Walmart"
            className="w-[60%] object-contain"
          />
        </div>
      </div>
      <div className="mb-4 text-left px-9">
        <h1 className=" font-black md:text-[40px] text-[30px] text-[#14213d]">
          Other Services
        </h1>
      </div>
      <div className="px-9 flex-row flex-wrap justify-center gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {technologies.map((technology) => (
          <>
            <Link to={technology.link} key={technology.title}>
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-black/10 p-5 rounded-2xl w-full"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="relative w-[35%] flex md:w-[50%]">
                    <img
                      src={technology.icon}
                      alt="project_image"
                      className="w-[60%] object-contain rounded-2xl md:h-[40px] h-auto"
                    />
                  </div>
                  <div className="w-full flex justify-start">
                    <h3 className="text-black font-bold md:text-[14px] text-[13px] text-start">
                      {technology.title}
                    </h3>
                  </div>
                </div>
              </Tilt>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Walmart;
