"use client";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              labore rerum dicta dolorum repellat. Exercitationem provident
              laudantium sequi adipisci at.
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
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
