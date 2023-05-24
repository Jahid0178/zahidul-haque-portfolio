"use client";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl mb-4 md:text-4xl">Let&apos;s Connect</h2>
            <p className="text-lg">
              Need to get in touch? You can send me a message using the contact
              form provided. I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="w-full mb-4 px-3 py-2 text-base outline-none rounded-sm text-black"
                {...register("fullName", { required: true })}
                type="text"
                placeholder="Enter your full name"
              />
              <input
                className="w-full mb-4 px-3 py-2 text-base outline-none rounded-sm text-black"
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter your email address"
              />
              <textarea
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
