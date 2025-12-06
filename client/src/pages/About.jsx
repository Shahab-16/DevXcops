import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import image1 from "../assets/image1.jpg"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const About = () => {
  const navigate=useNavigate();
  return (
    <div className="flex flex-col">
      <div className="bg-[#161519] text-white flex justify-center items-center h-[550px]">
        <div className="mt-[170px] flex flex-col justify-center items-center gap-5 ">
          <h1 className="font-bold text-7xl">About</h1>
          <p className="text-gray-300 text-xl py-2">Leave us a little info, and we'll be in touch</p>
          <button onClick={()=>navigate('/contact')} className="hover:cursor-pointer hover:bg-red-600   bg-red-500 text-white px-4 py-1.5 rounded-md text-lg font-bold"> Contact Us</button>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-16">

          {/* LEFT — ABOUT */}
          <div>
            <h5 className="text-lg font-semibold tracking-widest text-gray-600 mb-4 border-b border-gray-300 pb-2">
              ABOUT US
            </h5>

            <h1 className="text-5xl font-bold leading-tight mb-8">
              Discover Our Story,<br />
              Discover Your<br />
              Partner.
            </h1>

            <p className="text-gray-800 text-lg leading-relaxed">
              Webwhites is a digital solutions company based in the IT hub of
              Kerala, Thiruvananthapuram. Our mission is to support
              businesses of all kinds, from small to large corporations, by
              helping them establish a strong online presence. Our company
              was founded by an entrepreneur and technology enthusiast
              with over 10+ years of engineering experience, who dreamed of
              using technology to support the community.
            </p>
          </div>

          {/* MIDDLE — VISION */}
          <div className=" w-[294px] ml-[18%]">
            <h5 className="text-lg font-semibold tracking-widest text-gray-600 mb-4 border-b border-gray-300 pb-2">
              VISION
            </h5>

            <h3 className="text-3xl font-bold leading-snug mb-4">
              Leading the way to a<br />
              connected world
            </h3>

            <p className="text-gray-800 text-lg leading-relaxed">
              Our vision at Webwhites is to become the most trusted and
              preferred web design and digital transformation company
              globally by consistently delivering exceptional value to our
              clients and being at the forefront of technological innovation.
            </p>
            <h5 className="text-lg font-semibold tracking-widest text-gray-600 mb-4 border-b border-gray-300 pb-2 mt-[30%]">
              QUALITY
            </h5>
            <h3 className="text-3xl font-bold leading-snug mb-4">Excellence in every pixel</h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              At Webwhites, quality is our core value. Our dedicated team ensures
              that every web design and digital transformation solution we deliver
              meets and exceeds the expectations of our clients. We believe that our
              commitment to excellence is the foundation of our success.

            </p>
          </div>

          {/* RIGHT — MISSION */}
          <div className=" w-[291px]">
            <h5 className="text-lg font-semibold tracking-widest text-gray-600 mb-4 border-b border-gray-300 pb-2">
              MISSION
            </h5>

            <h3 className="text-3xl font-bold leading-snug mb-4">
              Empowering Your<br />
              Digital Journey
            </h3>

            <p className="text-gray-800 text-lg leading-relaxed">
              Our mission at Webwhites is to empower businesses of all
              sizes to establish a strong online presence and connect with
              their customers in meaningful ways through innovative web
              design and digital transformation solutions.
            </p>
            <h5 className="text-lg font-semibold tracking-widest text-gray-600 mb-4 border-b border-gray-300 pb-2 mt-[30%]">
              SUPPORT
            </h5>
            <h3 className="text-3xl font-bold leading-snug mb-4">Your satisfaction is
              our top priority
            </h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              We understand that our clients are the backbone of our business, and
              their satisfaction is paramount to our success. That’s why we take
              customer support seriously and strive to provide the highest level of
              service to our clients.

            </p>
          </div>

        </div>
      </div>
      <div className="container mx-auto  py-20">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className=""
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <div className="bg-white p-2 overflow-hidden">
                <img
                  src={img1}
                  alt="Portfolio"
                  className="mx-auto h-[550px] w-auto object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <div className="bg-white p-2 overflow-hidden">
                <img
                  src={img3}
                  alt="Portfolio"
                  className="mx-auto h-[550px] w-auto object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <div className="bg-white p-2 overflow-hidden">
                <img
                  src={img5}
                  alt="Portfolio"
                  className="mx-auto h-[550px] w-auto object-contain"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center">
              <div className="bg-white p-2 overflow-hidden">
                <img
                  src={img4}
                  alt="Portfolio"
                  className="mx-auto h-[550px] w-auto object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid grid-cols-2 items-center">
        {/* image */}
        <div className=" h-[950px]">
          <div className="flex flex-col ml-[20%]">
            <h3 className="ml-1 text-lg">Bussiness</h3>
            <h2 className="font-bold text-6xl">Building Your Trust</h2>
            <h2 className="font-bold text-6xl">Building Your Bussiness</h2>
          </div>
          <div className="ml-0 mt-[10%]">
            <img className="h-[400px] " src={image1} alt="" />
          </div>
          <div className="w-full flex justify-between mt-[10%] px-[8%]">

            {/* LEFT SIDE */}
            <div>
              <h3 className="text-lg tracking-widest uppercase text-gray-600">
                Customer Satisfaction
              </h3>
              <h1 className="text-5xl font-semibold  mt-3">
                Check the reviews from our happy customers.
              </h1>
            </div>
          </div>


        </div>
        {/* table*/}
        <div className="mb-[10%] mt-[10%] ml-[20%]">
          <div className="w-[600px] mx-auto mt-20 mb-[10%]">
            <h1 className="font-semibold text-5xl mb-12">
              Our People Make The Difference
            </h1>

            <Accordion title="Focus on Innovation">
              We continually explore new technologies and creative strategies to deliver
              innovative solutions that help our clients stay ahead.
            </Accordion>

            <Accordion title="Personalized Service">
              Our team works closely with each client to understand their goals and provide
              tailored solutions that suit their business.
            </Accordion>

            <Accordion title="Our Expertise">
              With years of experience in digital transformation, our team brings deep
              expertise across web design, UI/UX, development, and branding.
            </Accordion>

            <Accordion title="Client-Centric Approach">
              We build long-term relationships by focusing on our clients' needs and
              delivering measurable results that help their business grow.
            </Accordion>
          </div>
          <div className="ml-auto">
            <p className="text-xl leading-relaxed text-gray-800">
              "Working with Webwhites was a game-changer for my business. They developed
              an e-commerce site for my Vitamin Shop that perfectly represented my brand
              and helped increase our online sales. The team was responsive,
              knowledgeable, and provided exceptional service throughout the entire
              process. I highly recommend Webwhites to any business looking for
              professional e-commerce solutions."
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-lg text-black">CEO & Founder</h4>
              <p className="text-gray-600 text-lg">
                Vitavision Medical Supplies L.L.C.
              </p>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-end gap-2 mt-8">
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-black"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-left"
      >
        <span className="text-xl font-semibold text-black">{title}</span>
        <span className="text-red-500 text-3xl font-bold">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Separator */}
      <div className="border-b border-gray-300 w-full"></div>

      {open && (
        <div className="py-4 text-gray-700 text-lg leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

export default About;
