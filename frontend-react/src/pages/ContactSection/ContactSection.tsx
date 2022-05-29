import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-gray-800 flex justify-center py-4">
      <div className="flex justify-center flex w-1/3">
        
        <form name="contact form" className="contactForm items-center 
              justify-center w-full">
<h1 className="text-white mt-4 mx-4 text-3xl">Send me a <span className="text-red-500">Message!</span></h1>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="rounded-xl mb-4 mx-4 mt-8 w-full h-12 p-4 "
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="rounded-xl m-4 w-full h-12 p-4"
          />
          <br />
          <textarea name="message" placeholder="Messaage" className="m-4 w-full h-24 rounded-xl p-4"></textarea>
          <br />
          <button type="submit" className="m-4 w-full rounded-xl text-gray-800 bg-gray-200 h-12 font-bold">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
