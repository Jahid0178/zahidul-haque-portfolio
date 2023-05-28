"use client";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section id="contact">
      <div className="container">
        <div className="flex flex-col w-4/5 mx-auto gap-4">
          <div className="text-center">
            <h2 className="text-xl mb-4 md:text-4xl">Let&apos;s Connect</h2>
            <p className="text-lg">
              Need to get in touch? You can send me a message using the contact
              form provided. I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="mb-2 inline-block" htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                className="w-full mb-4 px-3 py-2 text-base outline-none rounded-sm text-black"
                {...register("fullName", { required: true })}
                type="text"
                placeholder="Enter your full name"
              />
              <label htmlFor="email" className="mb-2 inline-block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                className="w-full mb-4 px-3 py-2 text-base outline-none rounded-sm text-black"
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email address"
              />
              <label htmlFor="message" className="mb-2 inline-block">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                className="w-full mb-4 px-3 py-2 text-base outline-none rounded-sm text-black resize-none"
                type="text"
                {...register("message", { required: true })}
                placeholder="Enter your message..."
                rows={5}
              ></textarea>
              <input className="btn-primary" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
