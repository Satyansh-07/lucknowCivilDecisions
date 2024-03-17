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
    emailAddress: z.string().email(),
    password: z.string().min(3),
})

export default function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        emailAddress: "",
        password: ""
    }
  });

  const onSubmit = function(value){
    console.log(value)
  }

  return (
  <div className="w-screen h-screen flex justify-center items-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full m-[15px] shadow-[3px_3px_60px_0px_rgba(0,0,0,0.3)] p-4">
        <div className="text-2xl text-slate-500">Login</div>
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" {...field} className="focus-visible:ring-offset-0 focus-visible:ring-slate-400"/>
              </FormControl>
              <FormDescription className="text-[12px]">
                Please enter your passkey.
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
