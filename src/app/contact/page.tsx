// Contact.tsx
import HeaderComponent from "@/Components/HeaderComponent";
import Footer from "@/Components/Footer";
import React from "react";
import location from "../../../public/assets/location.png";
import phone from "../../../public/assets/phone.png";
import email from "../../../public/assets/email.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <HeaderComponent />
      <section className="w-10/12 m-auto mt-20">
        <div className="font-bold text-4xl">Contact Us</div>
        <p className="mt-4">
          Have questions or inquiries? Reach out to us using the form below or
          contact us directly.
        </p>
      </section>
      <section className="contactPage flex justify-between w-10/12 m-auto lg:mt-10">
        <div className="contactForm w-6/12">
          <form className=" lg:mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="John Doe"
            />
            <label className="block text-sm font-medium text-gray-700 mt-4">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="john.doe@example.com"
            />
            <label className="block text-sm font-medium text-gray-700 mt-4">
              Message
            </label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              rows={4}
              placeholder="Type your message here..."
            />
            <button className="btn mt-4 bg-black text-white font-bold p-3 w-full">
              Send Message
            </button>
          </form>
        </div>
        <div className="contactInformation w-5/12 lg:ml-8">
          <div className="font-bold text-2xl sm:mt-40">Contact Information</div>
          <div className="flex items-center font-bold ml-10 mb-2">
            {/* <Image src={tiktok} alt="" width={25} height={25} /> */}
            <p>Sumu Resin Art </p>
          </div>
          <div className="flex items-center mb-2">
            <Image className="mr-5" src={email} alt="" width={25} height={25} />
            <p>contact@sumuresinart.com</p>
          </div>
          <div className="flex items-center mb-2">
            <Image className="mr-5" src={phone} alt="" width={25} height={25} />
            <p>+251 912-62-0347</p>
          </div>
          <div className="flex items-center mb-2">
            {/* <img src={location} alt="Phone" className="w-6 h-6 mr-2" /> */}
            <Image
              className="mr-5"
              src={location}
              alt=""
              width={25}
              height={25}
            />
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
