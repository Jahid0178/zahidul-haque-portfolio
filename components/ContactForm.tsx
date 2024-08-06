"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Form, FormField } from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Tracker from "./Tracker";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    if (formRef.current) {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY as string,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );
      if (response.status === 200) {
        toast.success("Message sent successfully.");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto rounded-md space-y-4"
        ref={formRef}
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }: any) => (
            <Input
              {...field}
              type="text"
              placeholder="Enter your full name"
              className="bg-white dark:bg-slate-800/50"
            />
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }: any) => (
            <Input
              {...field}
              type="email"
              placeholder="Enter your email"
              className="bg-white dark:bg-slate-800/50"
            />
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }: any) => (
            <Textarea
              {...field}
              rows={6}
              placeholder="Enter your message"
              className="resize-none bg-white dark:bg-slate-800/50"
            />
          )}
        />
        <Tracker
          eventName="Contact Submit Button"
          eventCategory="Button"
          eventLabel="Contact Form Submit"
          eventAction="Click"
        >
          <Button
            type="submit"
            className="rounded-full"
            size="lg"
          >
            Send
          </Button>
        </Tracker>
      </form>
    </Form>
  );
};

export default ContactForm;
