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
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    contactNumber: z.string(),
    emailAddress: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
})
.refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
)
.refine(
    (data) => {
      return (/^(?!0+$)(\+\d{1,3}[- ]?)?(?!0+$)\d{10}$/).test(data.contactNumber);
    },
    {
      message: "Invalid contact number",
      path: ["contactNumber"],
    }
)



export default function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        firstName: "",
        lastName: "",
        contactNumber: "",
        emailAddress: "",
        password: "",
        confirmPassword: ""
    }
  });

  const onSubmit = function(value){
    console.log(value)
  }

  return (
  <div className="w-screen h-screen flex justify-center items-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 m-[15px] w-full shadow-[3px_3px_60px_0px_rgba(0,0,0,0.3)] p-4">
        <div className="text-2xl text-slate-500">Login</div>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="First Name" {...field} className="focus-visible:ring-offset-0 focus-visible:ring-slate-400 invalid:ring-red-500" />
              </FormControl>
              <FormDescription className="text-[12px]">
                Please enter your first name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Last Name" {...field} className="focus-visible:ring-offset-0 focus-visible:ring-slate-400"/>
              </FormControl>
              <FormDescription className="text-[12px]">
                Please enter your last name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Contact Number" {...field} className="focus-visible:ring-offset-0 focus-visible:ring-slate-400"/>
              </FormControl>
              <FormDescription className="text-[12px]">
                Please enter your contact number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email Address" {...field} className="focus-visible:ring-offset-0 focus-visible:ring-slate-400"/>
              </FormControl>
              <FormDescription className="text-[12px]">
                Please enter your email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} className="focus-visible:ring-offset-0 focus-visible:ring-slate-400"/>
              </FormControl>
              <FormDescription className="text-[12px]">
                Please enter your passkey.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Confirm Password" {...field} className="focus-visible:ring-offset-0 focus-visible:ring-slate-400"/>
              </FormControl>
              <FormDescription className="text-[12px]">
                Please enter the passkey you entered above.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-slate-600">Sign Up</Button>
      </form>
    </Form>
  </div>
  )
}
