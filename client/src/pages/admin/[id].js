import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeroHome from "../../components/HeroHome";
import FeaturesHome from "../../components/Features";
import FeaturesBlocks from "../../components/FeaturesBlocks";
import Testimonials from "../../components/Testimonials";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

const Home = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      <main className="flex-grow mt-28 p-10">
        {/* PROFILE CARD */}
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Viewed Tweets
                </th>
                <th scope="col" class="px-6 py-3">
                  Seconds Watched
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Keywords
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Sentiments
                </th>
                <th scope="col" class="px-6 py-3">
                  D/R
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Laptop</td>
                <td class="px-6 py-4">$2999</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Accessories
                </td>
                <td class="px-6 py-4">$99</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Google Pixel Phone
                </th>
                <td class="px-6 py-4">Gray</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Phone</td>
                <td class="px-6 py-4">$799</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Apple Watch 5
                </th>
                <td class="px-6 py-4">Red</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">Wearables</td>
                <td class="px-6 py-4">$999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      {/*  Page content */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
