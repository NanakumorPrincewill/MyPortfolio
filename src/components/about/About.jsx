import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] flex items-center bg-bg-secondary scroll-mt-20"
    >
      <div className="w-full max-w-6xl px-6 mx-auto sm:px-8 lg:px-12">
        <div className="py-12 sm:py-16">
          {/* Section Header */}
          <motion.div
            className="mb-8 text-center sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 heading-2 text-text-primary">About Me</h2>
            <div className="flex items-center justify-center space-x-2 sm:space-x-4">
              <div className="w-8 h-px sm:w-16 bg-gradient-to-r from-transparent to-secondary-indigo"></div>
              <div className="w-2 h-2 rounded-full sm:w-3 sm:h-3 bg-secondary-indigo"></div>
              <div className="w-8 h-px sm:w-16 bg-gradient-to-r from-secondary-indigo to-transparent"></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <motion.div
              className="order-2 space-y-6 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="mb-4 heading-3 text-text-primary">
                  Building the Future of Web with{" "}
                  <span className="gradient-text">Next.js & React</span>
                </h3>

                <div className="space-y-4 body-medium">
                  <p>
                    I&apos;m a Next.js developer specializing in building fast,
                    scalable web applications that deliver exceptional user
                    experiences. With expertise spanning frontend development
                    and backend API integration, I create complete,
                    production-ready solutions that drive business results.
                  </p>

                  <p>
                    I leverage modern technologies including React, TypeScript,
                    Tailwind CSS, and MongoDB, while utilizing Next.js&#39;s
                    advanced capabilities—server-side rendering, static site
                    generation, and API routes—to optimize application
                    performance, SEO, and scalability.
                  </p>

                  <p>
                    Whether building from scratch or optimizing existing
                    applications, I focus on delivering products that are both
                    visually stunning and technically robust, leaving a lasting
                    impression on users and clients alike.
                  </p>
                </div>
              </div>

              {/* Key Highlights - Compact Grid */}
              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-soft">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary-indigo/10">
                      <svg
                        className="w-4 h-4 text-secondary-indigo"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary">
                        Performance
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Lightning Fast
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-soft">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-emerald/10">
                      <svg
                        className="w-4 h-4 text-accent-emerald"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary">
                        Innovation
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Modern Solutions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-soft">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary-indigo/10">
                      <svg
                        className="w-4 h-4 text-secondary-indigo"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary">
                        Responsive
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Mobile First
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-soft">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-emerald/10">
                      <svg
                        className="w-4 h-4 text-accent-emerald"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary">
                        SEO Optimized
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Search Ready
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-indigo/10 to-accent-emerald/10 rounded-3xl blur-3xl"></div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-3xl shadow-large">
                  <Image
                    width={600}
                    height={600}
                    className="object-cover object-center w-full h-auto transition-transform duration-700 hover:scale-105"
                    alt="Princewill - Next.js Developer"
                    src="/myPhoto.jpg"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute w-8 h-8 rounded-full sm:w-16 sm:h-16 -top-2 -right-2 sm:-top-4 sm:-right-4 bg-secondary-indigo/10 blur-xl animate-float"></div>
                <div
                  className="absolute w-6 h-6 rounded-full sm:w-12 sm:h-12 -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-accent-emerald/10 blur-xl animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              {/* Experience Badge */}
              <div className="absolute p-2 bg-white border border-gray-100 sm:p-3 -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 rounded-xl shadow-large">
                <div className="text-center">
                  <div className="text-lg font-bold sm:text-xl text-secondary-indigo">
                    2+
                  </div>
                  <div className="text-xs font-medium text-text-secondary">
                    Years Experience
                  </div>
                </div>
              </div>

              {/* Next.js Badge */}
              <div className="absolute p-2 bg-white border border-gray-100 sm:p-3 -top-2 -right-2 sm:-top-4 sm:-right-4 rounded-xl shadow-large">
                <div className="text-center">
                  <div className="text-xs font-bold text-secondary-indigo">
                    NEXT.JS
                  </div>
                  <div className="text-xs font-medium text-text-secondary">
                    Developer
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
