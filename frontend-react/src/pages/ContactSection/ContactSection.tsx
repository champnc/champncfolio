import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_EMAILJS_SERVICE_ID as string,
        process.env.REACT_EMAILJS_TEMPLATE_ID as string,
        e.target as any,
        process.env.REACT_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-gray-800 flex justify-center py-4">
      <div className="justify-center flex w-2/3 md:w-1/3">
        <form name="contact form" className="contactForm items-center justify-center w-full" onSubmit={sendEmail}>
          <h1 className="text-white mt-4 text-3xl">
            Send me a <span className="text-red-500">Message!</span>
          </h1>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            className="rounded-xl mb-4 mt-8 w-full h-12 p-4 "
          />
          <br />
          <input
            type="text"
            name="from_email"
            placeholder="Enter your email"
            className="rounded-xl my-4 w-full h-12 p-4"
          />
          <br />
          <textarea
            name="message"
            placeholder="Messaage"
            className="my-4 w-full h-24 rounded-xl p-4"
          ></textarea>
          <br />
          <button
            type="submit"
            className="my-4 w-full rounded-xl text-gray-800 bg-gray-200 h-12 font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
