import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  const [scrolled, setScrolled] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pt-[100px] mx-auto text-black max-w-[1200px] text-center my-7">
      <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
        Terms and condions
      </h1>
      <div className="text-left text-black">
        <p className="text-gray-700">
          By using this website ({" "}
          <span className="text-[#fca311]">
            <Link to="/">www.reblatesols.com </Link>
          </span>
          ) or it’s any related URL or social media link please acknowledge that
          they are completely owned and operated by us (Reblate Solutions and
          Service Providers). So, before you start using our website there are
          some terms and conditions for using our services.
        </p>
        <h1 className="text-2xl font-bold my-2">Agreement</h1>
        <p className="text-gray-700">
          If you accept or agree to these policies then you will be legally
          bound by these terms and conditions. This will be a set forth
          agreement between you and Reblate Solutions and Service Providers.
          <br />
          <b className="text-black">Please note:</b> If you are accepting these
          terms and conditions on behalf of someone else then you are confirming
          that you have all the legal authority to bind that person in this
          agreement.
        </p>
        <h1 className="text-2xl font-bold my-2">Amendments</h1>
        <p className="text-gray-700">
          We have a complete right to amend, modify or change our policies from
          time to time. We will announce before we make any changes or
          modifications to our policies so it’s your responsibility to check for
          such changes.
          <br /> <b className="text-black">Please note:</b> If you do not wish
          to accept new policies then do not continue to use the website.
        </p>
        <h1 className="text-2xl font-bold yt-2">Contact Us</h1>
        <p className="text-gray-700">
          While contacting you will be asked to provide certain information
          about yourself that include your name, email and phone number. You
          agree to provide us real authentic information about yourself. We will
          store and use your information in accordance with our privacy policy.
        </p>
        <h1 className="text-2xl font-bold my-2">Access and Use of the Site</h1>
        <p className="text-gray-700">
          Before using this site, you agree that you will not
          <ul className="ml-10">
            <li className="list-disc">
              Engage in any unlawful or illegal activity
            </li>
            <li className="list-disc">
              Provide any false, inaccurate, or misleading information
            </li>
            <li className="list-disc">
              Try to access its services in any way that can affect, damage, or
              disrupt our servers or network in any way that host the site
            </li>
            <li className="list-disc">
              Use any data mining or scraping robots or tools
            </li>
            <li className="list-disc">
              Interfere with the security-related features of our site
            </li>
            <li className="list-disc">
              Try to access the site through any illegal or unauthorized way
            </li>
            <li className="list-disc">
              Use other person’s details like name or email
            </li>
            <li className="list-disc">
              Use our services for any intended purpose
            </li>
            <li className="list-disc">
              Try to harm our services by introducing viruses, hacking,
              phishing, trojans through any other programs
            </li>
            <li className="list-disc">
              Try to use any technology that could be harmful to our website
            </li>
            <li className="list-disc">
              Allow any third-party service to access or use our services
            </li>
            <li className="list-disc">
              Try to access the area of the website that you are not allowed or
              authorized to access
            </li>
            <li className="list-disc">
              Try to access other user’s information through any electronic or
              spamming method
            </li>
          </ul>
        </p>
        <h1 className="text-2xl font-bold my-2">Information on this Site</h1>
        <p className="text-gray-700">
          Before using this site, you agree that
          <ul className="ml-10">
            <li className="list-disc">
              All the text, graphics, logos, button icons, images, audio, video
              collectively content is owned and licensed by Reblate Solutions
              and Service Providers and protected by the US international
              copyright laws
            </li>
            <li className="list-disc">
              You cannot copy, reproduce, republish, encode, translate or upload
              our content in any way without the prior written permission of
              Reblate Solutions and Service
            </li>
            <li className="list-disc">
              You cannot embed, frame, or use any name of our service on any
              third-party website without our written consent
            </li>
            <li className="list-disc">
              You cannot use any kind of robots, data mining, scraping, or
              extraction tools to gather our data or content
            </li>
            <li className="list-disc">
              You cannot use the Reblate Solutions and Service trademark or logo
              on any website, device, packaging, advertising our written
              authorization
            </li>
            <li className="list-disc">
              You can use our blogs links for informational purposes but you
              have to submit the URL link where our article or link will be used
              (Any logo or graphic symbol is not included)
            </li>
          </ul>
        </p>
        <h1 className="text-2xl font-bold my-2">
          Responsibility of your Content
        </h1>
        <p className="text-gray-700">
          You are entirely responsible for all of the content that you upload,
          post, and email to us including personal information.
        </p>
        <h1 className="text-2xl font-bold my-2">Privacy Policy </h1>
        <p className="text-gray-700">
          Our terms and conditions are interrelated with our privacy policy. So,
          before you agree to our terms and conditions, please check our{" "}
          <Link to="/" className="text-[#fca311]">
            Privacy Policy
          </Link>{" "}
          for more information.
        </p>
        <h1 className="text-2xl font-bold my-2">Need to Speak to Us</h1>
        <p className="text-gray-700">
          If things get wrong and you need to ask something from us you can
          contact our support service team at{" "}
          <a className="text-blue-500" href="/" type="email">
            support@reblatesols.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Terms;
