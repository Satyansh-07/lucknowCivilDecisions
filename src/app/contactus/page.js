"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    emailAddress: z.string().email(),
    textArea: z.string().min(20),
})

export default function ContactUs() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        emailAddress: "",
        textArea: ""
    }
  });

  const onSubmit = function(value){
    console.log(value)
  }

  return (
  <div className="w-screen h-screen flex justify-center items-center flex-col">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-[15px] shadow-[3px_3px_60px_0px_rgba(0,0,0,0.3)] p-4">
        <h3 className="text-slate-500 text-center text-2xl">We are happy to help</h3>
        <p>Please enter your queries in the text box given below. Our representatives will contact you soon. Thanks for understanding.</p>
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} className="focus-visible:ring-offset-0 focus-visible:ring-slate-400 invalid:ring-red-500" />
              </FormControl>
              <FormDescription className="text-[12px]">
                Please enter your registered email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="textArea"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea type="text" placeholder="Please enter your queries here..." {...field} className="focus-visible:ring-offset-0 focus-visible:ring-slate-400 h-[100px]"/>
              </FormControl>
              <FormDescription className="text-[12px]">
                Please enter minimum 20 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-slate-600">Submit</Button>
      </form>
    </Form>
  </div>
  )
} 