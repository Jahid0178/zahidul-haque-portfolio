"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PageHeader from "../components/common/PageHeader/PageHeader";

const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => getFormData(data);

  return (
    <>
      <section>
        <div className="container">
          <PageHeader title="Contact" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl mb-2 font-bold">
                Here you can contact me
              </h2>
              <p className="text-lg">
                Need to get in touch? You can send me a message using the
                contact form provided. I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">City</h3>
                <p className="text-base">Dhaka</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Country</h3>
                <p className="text-base">Bangladesh</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Phone</h3>
                <a href="tel:+8801789293803" className="text-base">
                  +8801789293803
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:zahidul.haque767@gmail.com"
                  className="text-base"
                >
                  zahidul.haque767@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="flex flex-col w-full md:w-2/4 gap-4">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="mb-2 inline-block" htmlFor="fullName">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  className="w-full mb-4 px-3 py-2 text-base outline-none rounded-sm text-black focus:border-b-2 focus:border-black border-b-2 border-transparent"
                  {...register("fullName", { required: true })}
                  type="text"
                  placeholder="Enter your full name"
                />
                <label htmlFor="email" className="mb-2 inline-block">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  className="w-full mb-4 px-3 py-2 text-base outline-none rounded-sm text-black focus:border-b-2 focus:border-black border-b-2 border-transparent"
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email address"
                />
                <label htmlFor="message" className="mb-2 inline-block">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  className="w-full mb-4 px-3 py-2 text-base outline-none rounded-sm text-black resize-none focus:border-b-2 focus:border-black border-b-2 border-transparent"
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
    </>
  );
};

function getFormData(data) {
  fetch("/api/form", {
    method: "POST",
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      toast.error("Message Not Send");
    }
    toast.success("Message Send Successfully");
  });
}

export default ContactPage;
