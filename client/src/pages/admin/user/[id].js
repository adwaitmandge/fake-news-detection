import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import HeroHome from "../../../components/HeroHome";
import FeaturesHome from "../../../components/Features";
import FeaturesBlocks from "../../../components/FeaturesBlocks";
import Testimonials from "../../../components/Testimonials";
import Newsletter from "../../../components/Newsletter";
import Footer from "../../../components/Footer";
import Banner from "../../../components/Banner";

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
                 Url's
                </th>
                <th scope="col" class="px-6 py-3">
                Political Affiliation
                </th>
                <th scope="col" class="px-6 py-3">
                type
                </th>
                <th scope="col" class="px-6 py-3">
                  keywords
                </th>
                <th scope="col" class="px-6 py-3">
                  Sentiments
                </th>
                <th scope="col" class="px-6 py-3">
                Type of Speech
                </th>
                <th scope="col" class="px-6 py-3">
             L/R
                </th>
                <th scope="col" class="px-6 py-3">
             Clickbait
                </th>

                <th scope="col" class="px-6 py-3">
                  activity-on-tweets
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  http://www.projectrepublictoday.com-as-cause-of-all-school-shootings/
                </th>
                <td class="px-6 py-4">ambivalent right</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">1</td>
                <td class="px-6 py-4">bullied</td>
                <td class="px-6 py-4">Negative</td>
                <td class="px-6 py-4">offensive</td>
                <td class="px-6 py-4">0.0103755</td>
                <td class="px-6 py-4">0.291201710700988</td>
                <td class="px-6 py-4">1250385155 1251527960  133941427561431042 </td>

              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  http://forums.spacebattles.com/threads/-straight-people%E2%80%9D.362660/
                </th>
                <td class="px-6 py-4">populist right</td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">1</td>
                <td class="px-6 py-4">wear</td>
                <td class="px-6 py-4">Positive</td>
                <td class="px-6 py-4">hate speech</td>
                <td class="px-6 py-4">0.87845120</td>
                <td class="px-6 py-4">0.00545200000</td>
                <td class="px-6 py-4">  133941427561431042 </td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  http://dailyfeed.news/san-juan-city-council-votes-unanimously-to-impeach-trump-hating-mayor/
                </th>
                <td class="px-6 py-4">communist conservatives</td>
         
                <td class="px-6 py-4">1</td>
                <td class="px-6 py-4">polling</td>
                <td class="px-6 py-4">Positive</td>
                <td class="px-6 py-4">offensive</td>
                <td class="px-6 py-4">0.0109815478071583</td>
                <td class="px-6 py-4">0.396077752113342</td>
                <td class="px-6 py-4">938443241917243393 938534497015939072 938563053511233537  939174164124053504 </td>
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
