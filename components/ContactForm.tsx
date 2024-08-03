"use client";

import React from "react";
import { Form, FormField } from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactForm = () => {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto rounded-md space-y-4"
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
        <Button
          type="submit"
          className="rounded-full"
          size="lg"
        >
          Send
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
