import React from "react";
import WorldMap from "./ui/world-map";
import { motion } from "framer-motion";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <div className="mt-20 px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="">
            <div>
              <div className="">
                <div className="max-w-7xl mx-auto text-center">
                  <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
                    Contact{" "}
                    <span className="text-sky-500">
                      {"DuooTech".split("").map((word, idx) => (
                        <motion.span
                          key={idx}
                          className="inline-block"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.04 }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </span>
                  </p>
                  <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    DuooTech helps businesses build custom software, SaaS
                    platforms, AI-powered automation, and reliable digital
                    infrastructure. Get in touch with us, and let’s turn your
                    ideas into powerful digital solutions.
                  </p>
                </div>
                <WorldMap
                  dots={[
                    {
                      start: {
                        lat: 64.2008,
                        lng: -149.4937,
                      }, // Alaska (Fairbanks)
                      end: {
                        lat: 34.0522,
                        lng: -118.2437,
                      }, // Los Angeles
                    },
                    {
                      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                      end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                    },
                    {
                      start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                    },
                    {
                      start: { lat: 51.5074, lng: -0.1278 }, // London
                      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                    },
                    {
                      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div className="xl:px-10 xl:py-10 max-w-lg rounded-2xl">
              <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                Welcome to Aceternity
              </h2>
              <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                Login to aceternity if you can because we don&apos;t have a
                login flow yet
              </p>

              <form className="my-8" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                  <LabelInputContainer>
                    <Label htmlFor="firstname">First name</Label>
                    <Input id="firstname" placeholder="Tyler" type="text" />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="lastname">Last name</Label>
                    <Input id="lastname" placeholder="Durden" type="text" />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="projectmayhem@fc.com"
                    type="email"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <Input
                    id="message"
                    placeholder="Write Your Message..."
                    type="text"
                  />
                </LabelInputContainer>

                <button
                  className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                  type="submit"
                >
                  Sign up &rarr;
                  <BottomGradient />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default ContactUs;
