import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Transition from "@/utils/Transition";
import Image from "next/image";
import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";
import { useToast } from "@chakra-ui/react";

import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const myLoader = ({ src }) => {
  return `${src}`;
};

const Home = () => {
  const toast = useToast();
  const [hasMounted, setHasMounted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState();

  const [tab, setTab] = useState(1);
  const tabs = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("The entered data is ", userInput);

    // userInput is null
    if (!userInput) {
      console.log("Inside if");
      toast({
        title: "Invalid Input",
        position: "bottom-right",
        description: "Please fill the input field",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        {/* <HeroHome /> */}
        <section className="mt-36">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12 md:pb-20">
              {/* CTA box */}
              <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden">
                {/* Background illustration */}
                <div
                  className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
                  aria-hidden="true"
                >
                  <svg
                    width="428"
                    height="328"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient
                        cx="35.542%"
                        cy="34.553%"
                        fx="35.542%"
                        fy="34.553%"
                        r="96.031%"
                        id="ni-a"
                      >
                        <stop stopColor="#DFDFDF" offset="0%" />
                        <stop stopColor="#4C4C4C" offset="44.317%" />
                        <stop stopColor="#333" offset="100%" />
                      </radialGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <g fill="#FFF">
                        <ellipse
                          fillOpacity=".04"
                          cx="185"
                          cy="15.576"
                          rx="16"
                          ry="15.576"
                        />
                        <ellipse
                          fillOpacity=".24"
                          cx="100"
                          cy="68.402"
                          rx="24"
                          ry="23.364"
                        />
                        <ellipse
                          fillOpacity=".12"
                          cx="29"
                          cy="251.231"
                          rx="29"
                          ry="28.231"
                        />
                        <ellipse
                          fillOpacity=".64"
                          cx="29"
                          cy="251.231"
                          rx="8"
                          ry="7.788"
                        />
                        <ellipse
                          fillOpacity=".12"
                          cx="342"
                          cy="31.303"
                          rx="8"
                          ry="7.788"
                        />
                        <ellipse
                          fillOpacity=".48"
                          cx="62"
                          cy="126.811"
                          rx="2"
                          ry="1.947"
                        />
                        <ellipse
                          fillOpacity=".12"
                          cx="78"
                          cy="7.072"
                          rx="2"
                          ry="1.947"
                        />
                        <ellipse
                          fillOpacity=".64"
                          cx="185"
                          cy="15.576"
                          rx="6"
                          ry="5.841"
                        />
                      </g>
                      <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                    </g>
                  </svg>
                </div>

                <div className="relative flex flex-col lg:flex-row justify-between items-center">
                  {/* CTA content */}
                  <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="h3 text-white mb-2">
                      Enter URL or Text Query
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">
                      You will be provided with accurate information as well as
                      the percentage accuracy of the input article will be
                      highlighted
                    </p>

                    {/* CTA form */}
                    <form className="w-full lg:w-auto">
                      <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                        <input
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500 focus:outline-none active:outline-none"
                          placeholder="Query..."
                          aria-label="Query..."
                        />
                        <button
                          onClick={submitHandler}
                          className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                        >
                          Submit
                        </button>
                      </div>
                      {/* Success message */}
                      {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                      <p className="text-sm text-gray-400 mt-3">Start Now!</p>
                    </form>
                    {/* Empty input toast */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}

        <section className="relative">
          {/* Section background (needs .relative class on parent and next sibling elements) */}
          <div
            className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 flex flex-col items-center">
                <h1 className="h2 mb-4">Explore the solutions</h1>
                <p className="text-xl text-gray-600 mb-7">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                  cupidatat.
                </p>
                {response && (
                  <Box
                    className="my-9"
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: 1000,
                        height: 1000,
                      },
                    }}
                  >
                    <Paper elevation={3} className="">
                      <div className="p-10 text-2xl ">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section
                        1.10.32.
                      </div>
                    </Paper>
                  </Box>
                )}
              </div>

              {/* Displaying the Response */}

              {/* Section content */}
            </div>
          </div>
        </section>
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Home;
