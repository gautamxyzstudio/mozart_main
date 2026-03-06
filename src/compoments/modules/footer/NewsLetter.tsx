"use client";
import { newsletterApi } from "@/src/api/newsletter/newsletterApi";
import { AxiosError } from "axios";
import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    try {
      const res = await newsletterApi({ email });

      if (res) {
        alert("Email subscribed successfully");
        setEmail("");
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.status === 400) {
        alert("Email already subscribed");
      } else {
        alert("something went wrong");
      }
    }
  };
  return (
    <div className="relative flex w-full xl:px-25 xl:py-24 md:px-13 md:pt-13 md:pb-23 pt-8 px-6 pb-18 bg-primary">
      <div className="flex flex-col xl:space-y-8 md:space-y-6 space-y-3 xl:w-[77%] md:w-[75%]">
        <span className="text-background font-bold capitalize xl:text-[64px] xl:leading-18 md:text-[48px] md:leading-14 text-2xl md:w-full w-[91%]">
          Get the latest drops, promos & updates in your inbox.
        </span>
        <div className="flex flex-col gap-y-1.5">
          <span className="xl:text-base text-sm text-background">
            Your email address
          </span>
          <div className="w-full xl:w-[47%] md:w-[75%] flex flex-col relative">
            <div className="w-full border border-background/50 rounded-full pl-4 md:py-0.75 md:pr-0.75 py-3.5 flex items-center-safe justify-between xl:mb-0 md:mb-3">
              <div className="flex flex-row gap-x-1 items-center-safe">
                <input
                  className="outline-none placeholder:text-background/50 text-white"
                  type="email"
                  placeholder="email address"
                  required
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>
              <button
                onClick={handleSubscribe}
                className="bg-background text-primary font-bold text-base py-3 px-20.5 rounded-full md:flex hidden"
              >
                Submit
              </button>
            </div>
            <button
              onClick={handleSubscribe}
              className="bg-background text-primary font-bold text-base py-3 px-20.5 rounded-full mt-4 md:hidden block w-fit "
            >
              Submit
            </button>
            {error && (
              <p className="text-red-500 absolute md:-bottom-4.5 -bottom-2 mt-3 text-sm">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
