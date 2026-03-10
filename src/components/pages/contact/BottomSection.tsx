"use client";
import { Images, Icons } from "@/public/exports";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const BottomSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
  };

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background Large Text */}
      <h1 className="text-[#111] opacity-[0.1] lg:text-[12rem] lg:leading-80 font-bold md:text-[124px] md:leading-40 text-[70px] leading-20">
        Get In Touch
      </h1>

      <div className="px-6 flex  flex-row items-center gap-10 w-full">
        <Image
          src={Images.Disk}
          alt="Lyrics"
          className="xl:w-204.25 xl:h-204.25 xl:-ml-113.5 md:w-137.5 md:h-136.5 md:-ml-72 md:flex  hidden animate-rotate360"
        />

        <div className="md:w-full xl:w-full z-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="">
              {/* Name */}
              <div className="flex gap-6 mb-3 w-full">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-black80 mb-1">
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    })}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 mb-3 w-full">
                {/* Phone Number Section */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-black80 mb-1">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="Enter your phone no."
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                  />
                </div>

                {/* Service Section */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-black80 mb-1">
                    Service
                  </label>
                  <input
                    {...register("service")}
                    placeholder="Enter your service"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-black80 mb-1">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Enter your message"
                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary xl:w-[30%] md:w-[40%] w-full text-white px-10 py-3 rounded-full font-semibold  "
            >
              Submit
            </button>
          </form>

          <div className="mt-12 flex flex-nowrap justify-between items-center bg-white rounded-[20px] xl:p-8 md:p-4 p-4 gap-x-4 shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">

            {/* Quick Contact */}
            <div className="flex items-center gap-2 min-w-0">
              <Image
                src={Icons.QuickContact}
                alt="Quick Contact"
                className="xl:w-10 xl:h-10 md:w-8 md:h-8 w-6 h-6 shrink-0"
              />
              <div className="min-w-0">
                <p className="font-bold text-black-80 xl:text-lg md:text-[12px] text-[10px] leading-tight truncate">
                  Quick Contact
                </p>
                <p className="text-gray-500 xl:text-sm md:text-[10px] text-[9px] mt-0.5 font-medium truncate">
                  support@thexyz.media
                </p>
              </div>
            </div>

            <div className="h-10 w-px bg-linear-to-b from-transparent via-purple-400 to-transparent shrink-0"></div>

            {/* Phone Number */}
            <div className="flex items-center gap-2 min-w-0">
              <Image
                src={Icons.PhoneNumber}
                alt="Phone Number"
                className="xl:w-10 xl:h-10 md:w-8 md:h-8 w-6 h-6 shrink-0"
              />
              <div className="min-w-0">
                <p className="font-bold text-[#2D2D2D] xl:text-lg md:text-[12px] text-[10px] leading-tight truncate">
                  Phone Number
                </p>
                <p className="text-gray-500 xl:text-sm md:text-[10px] text-[9px] mt-0.5 font-medium truncate">
                  +1 (778) 302-9979
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
