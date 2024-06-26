import React from "react";

export const Hero = () => {
  return (
    <div className="transition-colors">
      <div className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="max-w-xl mb-6 ">
                <h2 className="max-w-lg mb-6 font-kaushan text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none dark:text-white">
                  Let us handle
                  <br className="hidden md:block dark:text-white" />
                  your next{" "}
                  <span className="inline-block text-deep-purple-accent-400 dark:text-white">
                    destination
                  </span>
                </h2>

                <p className="text-base text-gray-700 md:text-lg font-kanit dark:text-white">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
              <div>
                <a
                  href="/register"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Get Started
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className=" hero-images-right flex items-center justify-center -mx-4 lg:pl-8 group relative">
              <div className="flex flex-col items-end px-3 ">
                <img
                  className="object-cover mb-6 hover:relative hover:mr-8 transition  hover:duration-300 hover:delay-150 ease-in-out cursor-pointer rounded-xl shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 bg-gray-500 shadow-gray-500/50 dark:shadow-cyan-500/50 "
                  src="/img_1.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />

                <img
                  className="object-cover -bottom-[7rem] left-24 group-hover:left-20 w-20 h-20 cursor-pointer rounded-xl shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 bg-gray-500  shadow-gray-500/50 dark:shadow-cyan-500/50"
                  src="/img_2.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded-xl hover:ml-8 transition cursor-pointer shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 bg-gray-500  shadow-gray-500/50 shadow-cyan-500/50"
                  src="/img_3.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
