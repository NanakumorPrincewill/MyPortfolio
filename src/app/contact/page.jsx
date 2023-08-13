"use client";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function AddTopic() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("All are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="container px-8 py-2 mx-auto mt-20 border border-slate-500"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="px-8 py-2 border border-slate-500"
        type="text"
        placeholder="Topic Description"
      />

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
  );
}
