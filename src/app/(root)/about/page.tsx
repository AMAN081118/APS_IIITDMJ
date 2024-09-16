"use client";

import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "../../../components/ui/navber-menu";
import { cn } from "../../../utils/cn";
import NavbarMobile from "src/components/ui/navber-mobile";
import Image from 'next/image';
import styles from './page.module.css';
// import {calsans} from "../../../fonts/calsans";
// import calsans from "../../../fonts/calsans";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../components/ui/tracing-beam";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720); // Set isMobile based on viewport width
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to render Navbar or NavbarMobile based on viewport width
  const renderNavbar = () => {
    return isMobile ? <NavbarMobile /> : <Navbar />;
  };

  return (
    <div className={styles.main}>
      <div className="relative w-full flex items-center justify-end top-2">
        {renderNavbar()}
      </div>
      <div className="logo">
        <Image src="/aboutbanner.jpg" alt="banner" width={1000} height={1000} layout="responsive" />
      </div>

      <div className="mainsection">
        <div className="abouttext  bg-teal-900 flex flex-row justify-center"> {/* Modified line */}
          <div className="pt-20 pb-20 pl-32 pr-32 w-1/2"> {/* Modified line */}
            <h1 className="font-jetbrains-mono text-4xl text-white ">The Astronomy And Physics Society</h1>

            <p className="mt-6 text-teal-400">We are the Astronomy and Physics Society of IIITDM Jabalpur. We are a group of many astro-enthusiasts under the Gymkhana of the IIITDM Jabalpur. Here, we attempt to bring about an interest and awareness in the field of Astronomy and Space Research. All along the we have been promoting amateur astronomy through talks, competetions and shows.</p>
          </div>
          <div className="bg-cover flex align-middle relative  w-1/2"> {/* Modified line */}
            <Image className="mr-20" src="/aboutimg.jpg" alt="about" layout="fill" objectFit="cover" />
          </div>
        </div>


        <TracingBeamDemo />


        <div className="section mt-20 pt-20 pb-20 pl-32 pr-32  bg-teal-900">
          <h1 className="font-jetbrains-mono text-4xl text-white pb-4">Our Efforts</h1>
          <p className="text-gray-300">The Astronomy and Physics Society is dedicated to fostering a deeper
            understanding <br /> of the cosmos through engaging and interactive activities. Our club offers a variety of
            sessions <br /> and workshops, each designed to inspire curiosity and learning about astronomy and physics.
          </p>
          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Astronomy Sessions</h2>
          <p className="text-gray-300">Regular sessions related to Astronomy and Physics including separate discussions<br />
            and knowledge-sharing sessions, where members can dive deeper into specific areas of interest.<br />
            Workshops like Image Processing Workshop and Telescope Workshop
          </p>
          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Workshops</h2>
          <p className="text-gray-300">Workshops such as the JWST Image Processing Workshop, Telescope Workshop, <br />
             and Astrophotography Workshop where participants learn hands-on skills essential for astronomical exploration.
          </p>

          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Workshops</h2>
          <p className="text-gray-300">Workshops such as the JWST Image Processing Workshop, Telescope Workshop, <br />
            and Astrophotography Workshop where participants learn hands-on skills essential for astronomical exploration.
          </p>

          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Observatory Sessions</h2>
          <p className="text-gray-300">Our members frequently participate in observation sessions where we use telescopes
            to explore <br /> the Moon, nebulae, and planets like Saturn.
            Naked-eye observations and binocular use also play <br /> an important role in our sessions, making astronomy accessible to all.
          </p>

          <h2 className="mt-5 text-2xl mb-2 text-teal-400">Quizzing And Competitions</h2>
          <p className="text-gray-300">To encourage friendly competition and learning, we organize quizzes and competitions
            such as Treasure Hunts -<br /> which is also one of our flagship events - open to anyone with an interest in the mysteries of the universe.
          </p>
        </div>

        <footer className="">
          <div className="max-w-8xl  py-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 ml-10  md:grid-cols-2 lg:grid-cols-4 gap-8">

              <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Contact Us</h3>
                <p className="mt-4 font-normal text-teal-400" >52GG+H4G, Airport Rd, PDPM IIITDM Jabalpur Campus, <br />
                  Khamaria, Jabalpur, Chakdehi, Madhya Pradesh 482005</p>
                {/*UNDER DEVELOPMENT PHASE <p className="mt-2 font-normal gray-400">Phone: 123-456-7890</p> */}
                <p>Email: astronomy@iiitdmj.ac.in</p>
              </div>
              <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Links</h3>
                <ul className="mt-4 grid grid-cols-2 space-y-2 text-teal-400 font-normal">

                  <li><a href="/about">About Us</a></li>
                  <li><a href="/sessions">Sessions</a></li>
                  {/* <li><a href="/contact">Contact</a></li> */}
                  <li><a href="/members">Members</a></li>
                  <li><a href="/events">Events</a></li>
                  <li><a href="/forms">Forms</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Social Media</h3>
                <ul className="mt-4 space-y-2  text-teal-400 font-normal">
                  <li><a href="https://facebook.com">Facebook</a></li>
                  <li><a href="https://instagram.com">Instagram</a></li>
                  <li><a href="https://linkedin.com">LinkedIn</a></li>
                </ul>
              </div>

              <div className="logo  ">
                <Image src="/footsticker.png" alt="logo" width={300} height={300} className={styles.rotate} />
              </div>
              {/* <div>
                <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Newsletter</h3>
                <p className="mt-4">Subscribe to our newsletter to receive updates and news.</p>
                <form className="mt-2">
                  <input type="email" placeholder="Enter your email" className="w-full py-2 px-4 rounded-md bg-gray-800 text-white" />
                  <button type="submit" className="mt-2 py-2 px-4 bg-teal-400 text-white rounded-md">Subscribe</button>
                </form>
              </div> */
              }

            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2024 APS, All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

//navbar here

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-5 inset-x-20 max-w-2xl mx-auto z-30 mb-10", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        {/* <HoveredLink href="/contact">Contact Us</HoveredLink> */}
        <HoveredLink href="/about">About Us</HoveredLink>
        <HoveredLink href="/sessions">Sessions</HoveredLink>
        <HoveredLink href="/fests">Fests</HoveredLink>
        <HoveredLink href="/members">Members</HoveredLink>
        <HoveredLink href="/events">Events</HoveredLink>
        <HoveredLink href="/form">Form</HoveredLink>
        {/* <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-6 text-s">
            <HoveredLink href="/events">Events</HoveredLink>
            <HoveredLink href="/form">Form</HoveredLink>
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}

//tracing beam section

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 mt-20">
      <div className="max-w-2xl mx-auto antialiased pt-5 pb-5 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-15 flex">
            <div className="flex-1">
              <h2 className="bg-teal-900 text-white rounded-full text-sm w-fit px-6 py-1 mb-4">
                {item.badge}
              </h2>
              <p className="text-xl mb-4 font-bold text-teal-400">
                {item.title}
              </p>
              {item.description}
            </div>

            <div className="flex-1 text-sm prose prose-sm dark:prose-invert">
              {item.image && (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Abhay Singh",
    description: (
      <>
        <p>Current Coordinator of the club. <br />
          since: 2023</p>
        <p>Email: 21bec003@iiitdmj.ac.in</p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:21bec003@iiitdmj.ac.in">
            <img src="/gmail.png" alt="Gmail" className="w-6 " />
          </a>
          <a href="https://www.linkedin.com/in/singhabhay1/">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 " />
          </a>
        </div>
      </>
    ),
    image: {
      src: "/coordinator.jpg",
      alt: "Coordinator",
    },
    badge: "Coordinator",
  },
  {
    title: "Alok Rai",
    description: (
      <>
        <p>Name: John Doe</p>
        <p>Role: Co-Coordinator</p>
        <p>Email: john.doe@example.com</p>
        <div className="flex space-x-4 mt-5">
          <a href="mailto:john.doe@example.com">
            <img src="/gmail.png" alt="Gmail" className="w-6 " />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 " />
          </a>
        </div>
      </>
    ),
    image: {
      src: "/cocoordinator.jpg",
      alt: "Co-Coordinator",
    },
    badge: "Co-Coordinator",
  },
];

export default About;