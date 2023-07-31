"use client";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((!name || !email, !subject || !message)) {
      alert("All fields are required please");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        toast.success("Message Sent ");
        router.push("/success");
      } else {
        throw new Error("Failed to create a Contact");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" className="px-2 py-10">
      <div>
        <h1 className="mb-6 text-4xl font-bold tracking-widest text-center text-gray-700 md:text-5xl lg:text-6xl">
          Contact
          <hr className="w-10 h-1 mx-auto mt-2 bg-orange-500 border-0"></hr>
        </h1>
      </div>
      <div class="container relative mx-auto ">
        <div class="w-full mx-auto">
          <form onSubmit={handleSubmit} class="flex flex-wrap">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  class="w-full focus:bg-white bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-orange-500 focus:bg-white focus:none  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:none  focus:bg-white focus:border-orange-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <motion.button
                type="submit"
                class="flex mx-auto text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg transition ease-in duration-200"
                whileTap={{
                  scale: 0.5,
                }}
              >
                Send <FaTelegramPlane size={25} />
              </motion.button>
            </div>
          </form>
        </div>
      </div>

      <div className="container flex justify-end px-2 pt-10 mx-auto">
        <Link href="/">
          <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer animate-bounce">
            <HiOutlineChevronDoubleUp className="text-orange-500" size={30} />
          </div>
        </Link>
      </div>
    </section>
  );
}
